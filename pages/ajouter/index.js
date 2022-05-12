// Librairies
import Head from 'next/head';
import { useForm } from 'react-hook-form';

export default function Ajouter() {
    // Variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Méthode
    const onSubmittedHandler = async (data) => {
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
            console.log(
                fetchedData.message ||
                    "Une erreur est survenue dans l'API."
            );
        } else {
            console.log(fetchedData);
        }
    };

    return (
        <>
            <Head>
                <title>Ajouter un article</title>
            </Head>
            <h1>Ajouter un projet</h1>
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
                        <div
                            style={{
                                margin: '15px 0 15px 0',
                                backgroundColor: '#ee6c4d',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '5px',
                            }}
                        >
                            Veuillez remplir tous les champs du
                            formulaire.
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmittedHandler)}>
                        <p>
                            <label htmlFor='titre'>Titre</label>
                            <input
                                id='titre'
                                placeholder='Titre du projet'
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
                                }}
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
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
                                }}
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
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
                                }}
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
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
                                }}
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
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
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
                                style={{
                                    display: 'block',
                                    width: '400px',
                                    border: '1px solid gray',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                    marginTop: '5px',
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
                            <button
                                style={{
                                    border: 0,
                                    backgroundColor: '#ee6c4d',
                                    color: 'white',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                }}
                            >
                                Ajouter
                            </button>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}
