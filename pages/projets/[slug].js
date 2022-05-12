// Librairies
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { connectToDatabase } from '../../helpers/mongodb';

export default function Projet(props) {
    // Variables
    const { titre, description, slug, annee, client } = props.projet;
    let clientAficher = client;

    if (client == 'Projet personnel') {
        clientAficher = 'perso';
    }

    return (
        <>
            <h1 style={{ marginBottom: '.5rem' }}>{titre}</h1>
            <small style={{ display: 'flex', gap: '15px' }}>
                <Link href={`/${clientAficher}`}>
                    <a
                        style={{
                            color: '#ee6c4d',
                            textDecoration: 'none',
                        }}
                    >
                        {client}
                    </a>
                </Link>
                <div>Projet réalisé en {annee}. </div>
            </small>
        </>
    );
}

export async function getStaticPaths() {
    // Les Variables
    let projets;
    try {
        const client = await connectToDatabase();
        const db = client.db();

        // Récupérer tout les projets
        projets = await db.collection('projets').find().toArray();
    } catch (error) {
        projets = [];
    }

    const dynamicPaths = projets.map((projet) => ({
        params: { slug: projet.slug },
    }));

    return {
        paths: dynamicPaths,
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {
    // Les Variables
    let projetRecupere;
    let { params } = context;
    const slug = params.slug;

    try {
        const client = await connectToDatabase();
        const db = client.db();

        // // connexion à MongoDB
        // client = await MongoClient.connect(
        //     'mongodb+srv://Bless:W7lt0FuKcpTJFiOc@cluster0.kh93b.mongodb.net/portfolio?retryWrites=true&w=majority'
        // );

        // //Connexion à la BD
        // const db = client.db();

        // Récuperer les projets
        projetRecupere = await db
            .collection('projets')
            .find({ slug: slug })
            .toArray();
    } catch (error) {
        projetRecupere = [];
    }

    if (!projetRecupere[0]) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            projet: JSON.parse(JSON.stringify(projetRecupere))[0],
            revalidate: 3600,
        },
    };
}
