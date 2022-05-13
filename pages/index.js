// Librairies
import CarteDeProjet from '../components/CarteDeProjet/CarteDeProjet';
import { connectToDatabase } from '../helpers/mongodb';
import Head from 'next/head';
import Image from 'next/image';
import { getSession, signOut } from 'next-auth/client';
import { useState } from 'react';
import { SpinnerDotted } from 'spinners-react';

export default function Index(props) {
    // States
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    // Méthode
    const onDeleteClickedHandler = async () => {
        if (!isLoading) {
            setIsLoading(true);
            setError(null);

            // Envoyer ma demande de suppression
            const reponse = await fetch(
                '/api/utilisateur/supprimer',
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const fetchedData = await reponse.json();

            if (!reponse.ok) {
                setIsLoading(false);
                setError(
                    fetchedData.message || 'Une erreur est survenue'
                );
            } else {
                setIsLoading(false);
                signOut();
            }
        }
    };

    return (
        <main>
            <Head>
                <title>
                    Le portfolio d'un développeur (Alliance)
                </title>
            </Head>
            <h1>
                Bienvenue{' '}
                {props.utilisateur
                    ? props.utilisateur.name
                    : 'sur mon portfolio'}
            </h1>
            <div
                style={{
                    border: '2px solid #ee6c4d',
                    padding: '30px',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '30px',
                }}
            >
                <div>
                    <h2 style={{ fontWeight: 'lighter' }}>
                        Je m'appelle <b>Alliance Tshindayi</b>
                    </h2>
                    <p>
                        Je suis développeur full-stack, je maîtrise de
                        nombreuses technologies. Envie de collaborer
                        avec moi ?
                    </p>
                    <p>
                        <a
                            href='mailto:moi@gmail.com'
                            style={{
                                display: 'inline-block',
                                background: '#ee6c4d',
                                color: 'white',
                                textDecoration: 'none',
                                padding: '10px 15px 10px 15px',
                                borderRadius: '5px',
                            }}
                        >
                            Contactez-moi !
                        </a>

                        {props.utilisateur && (
                            <button
                                style={{
                                    background: '#ee6c4d',
                                    marginLeft: '10px',
                                    border: 'none',
                                    color: 'white',
                                    padding: '10px 15px 10px 15px',
                                    borderRadius: '5px',
                                }}
                                onClick={onDeleteClickedHandler}
                            >
                                {isLoading ? (
                                    <SpinnerDotted
                                        size={15}
                                        thickness={100}
                                        speed={100}
                                        color='#ffffff'
                                    />
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                        />
                                    </svg>
                                )}
                            </button>
                        )}
                    </p>
                </div>
                <div>
                    <div
                        style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            lineHeight: 0,
                        }}
                    >
                        <Image
                            src='/moi.jpg'
                            alt='Moi'
                            width={150}
                            height={150}
                            layout='fixed'
                            // quality={100}
                            // unoptimized
                            // priority={true}
                            // loading='eager'
                        />
                    </div>
                </div>
            </div>

            <h2 style={{ marginTop: '45px' }}>
                Mes derniers projets
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                }}
            >
                {props.projets.map((projet) => (
                    <CarteDeProjet projet={projet} key={projet._id} />
                ))}
            </div>
        </main>
    );
}

export async function getServerSideProps(context) {
    // Variables
    let projets;
    const session = await getSession({ req: context.req });
    let utilisateur = null;

    if (session) {
        utilisateur = session.user;
        console.log(utilisateur);
    }

    try {
        // Connexion à MongoDB
        const client = await connectToDatabase();
        const db = client.db();

        projets = await db
            .collection('projets')
            .find()
            .sort({ dateDePublication: -1 })
            .limit(3)
            .toArray();
    } catch (error) {
        console.log(error);
        projets = [];
    }

    return {
        props: {
            projets: JSON.parse(JSON.stringify(projets)),
            utilisateur: utilisateur,
        },
    };
}
