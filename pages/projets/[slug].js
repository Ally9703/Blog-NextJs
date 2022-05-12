// Librairies
import Link from 'next/link';
import { connectToDatabase } from '../../helpers/mongodb';
import Head from 'next/head';

export default function Projet(props) {
    // Variables
    const { titre, description, client, annee, slug } = props.projet;
    let clientAAfficher = client;
    if (client == 'Projet personnel') {
        clientAAfficher = 'perso';
    }

    return (
        <>
            <Head>
                <title>{titre}</title>
            </Head>
            <h1 style={{ marginBottom: '.5rem' }}>{titre}</h1>
            <small style={{ display: 'flex', gap: '15px' }}>
                <Link href={`/${clientAAfficher}`}>
                    <a
                        style={{
                            color: '#ee6c4d',
                            textDecoration: 'none',
                        }}
                    >
                        {client}
                    </a>
                </Link>
                <div>Projet réalisé en {annee}.</div>
            </small>
        </>
    );
}

export async function getServerSideProps(context) {
    // Variables
    let projetRecupere;
    let { params } = context;
    const slug = params.slug;

    try {
        const client = await connectToDatabase();
        const db = client.db();

        // Récupérer le projet en cours
        projetRecupere = await db
            .collection('projets')
            .find({ slug: slug })
            .toArray();
    } catch (error) {
        projetRecupere = [];
    }

    if (!projetRecupere[0]) {
        return {
            // notFound: true,
            redirect: {
                destination: '/',
            },
        };
    }

    return {
        props: {
            projet: JSON.parse(JSON.stringify(projetRecupere))[0],
        },
    };
}

// export async function getStaticPaths() {
// 	// Variable
// 	let projets;

// 	try {
// 		const client = await connectToDatabase();
// 		const db = client.db();

// 		// Récupére tous les projets
// 		projets = await db.collection('projets').find().toArray();
// 	} catch (error) {
// 		projets = [];
// 	}

// 	const dynamicPaths = projets.map((projet) => ({
// 		params: { slug: projet.slug },
// 	}));

// 	return {
// 		paths: dynamicPaths,
// 		fallback: 'blocking',
// 	};
// }

// export async function getStaticProps(context) {
// // Variables
// let projetRecupere;
// let { params } = context;
// const slug = params.slug;

// try {
// 	const client = await connectToDatabase();
// 	const db = client.db();

// 	// Récupérer le projet en cours
// 	projetRecupere = await db
// 		.collection('projets')
// 		.find({ slug: slug })
// 		.toArray();
// } catch (error) {
// 	projetRecupere = [];
// }

// if (!projetRecupere[0]) {
// 	return {
// 		// notFound: true,
// 		redirect: {
// 			destination: '/',
// 		},
// 	};
// }

// return {
// 	props: {
// 		projet: JSON.parse(JSON.stringify(projetRecupere))[0],
// 	},
// 	revalidate: 3600,
// };
// }
