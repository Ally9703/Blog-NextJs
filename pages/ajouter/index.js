// Librairies
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { SpinnerDotted } from 'spinners-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';

// Composants
import Error from '../../components/ui/Error/Error';
import Button from '../../components/ui/Button/Button';

export default function Ajouter() {
	// Variables
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const router = useRouter();

	// States
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	// Méthode
	const onSubmittedHandler = async (data) => {
		if (!isLoading) {
			setIsLoading(true);
			setError(null);
			// Envoyer le nouveau projet sur notre API Next
			const response = await fetch('/api/projet', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const fetchedData = await response.json();

			if (!response.ok) {
				setIsLoading(false);
				setError(
					fetchedData.message || 'Une erreur est survenue.',
				);
			} else {
				setIsLoading(false);
				router.replace(`/projets/${fetchedData.projet.slug}`);
			}
		}
	};

	return (
		<>
			<Head>
				<title>Ajouter un article</title>
			</Head>
			<h1 style={{ textAlign: 'center', marginTop: '35px' }}>
				Ajouter un projet
			</h1>
			<section
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				<main
					style={{
						backgroundColor: '#f3f3f3',
						padding: '30px',
					}}
				>
					{(errors.titre ||
						errors.slug ||
						errors.client ||
						errors.annee ||
						errors.description ||
						errors.contenu) && (
						<Error>
							Veuillez remplir tous les champs du
							formulaire.
						</Error>
					)}
					{error && <Error>{error}</Error>}
					<form onSubmit={handleSubmit(onSubmittedHandler)}>
						<p>
							<label htmlFor='titre'>Titre</label>
							<input
								id='titre'
								placeholder='Titre du projet'
								className='input'
								{...register('titre', {
									required: true,
								})}
							/>
						</p>
						<p>
							<label htmlFor='slug'>Slug</label>
							<input
								id='slug'
								placeholder='Slug du projet'
								className='input'
								{...register('slug', {
									required: true,
								})}
							/>
						</p>
						<p>
							<label htmlFor='client'>Client</label>
							<input
								id='client'
								placeholder='Client associé au projet'
								className='input'
								{...register('client', {
									required: true,
								})}
							/>
						</p>
						<p>
							<label htmlFor='annee'>Année</label>
							<input
								id='annee'
								placeholder='Année de création du projet'
								className='input'
								{...register('annee', {
									required: true,
								})}
							/>
						</p>
						<p>
							<label htmlFor='description'>
								Description
							</label>
							<textarea
								id='description'
								placeholder='Description du projet'
								rows='5'
								className='input'
								style={{
									fontFamily: 'arial',
								}}
								{...register('description', {
									required: true,
								})}
							></textarea>
						</p>
						<p>
							<label htmlFor='contenu'>Contenu</label>
							<textarea
								id='contenu'
								placeholder='Contenu du projet'
								rows='5'
								className='input'
								style={{
									fontFamily: 'arial',
								}}
								{...register('contenu', {
									required: true,
								})}
							></textarea>
						</p>
						<div
							style={{
								display: 'flex',
								justifyContent: 'end',
							}}
						>
							<Button>
								{isLoading ? (
									<SpinnerDotted
										size={15}
										thickness={100}
										speed={100}
										color='#ffffff'
									/>
								) : (
									'Ajouter'
								)}
							</Button>
						</div>
					</form>
				</main>
			</section>
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			redirect: {
				destination: '/connexion',
				permanent: false,
			},
		};
	}

	if (session && !session.user.roles.includes('administrateur')) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
}
