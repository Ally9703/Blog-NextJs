// Librairies
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../helpers/mongodb';

// import { MongoClient } from 'mongodb';
// import Link from 'next/link';

// Composants
import CarteDeProjet from '../../components/CarteDeProjet/CarteDeProjet';
import FiltresDeClient from '../../components/FiltresDeClient/FiltresDeClient';

export default function ProjetsDuClient(props) {
    // Variable
    const router = useRouter();
    let nomDuClient = router.query.client;

    if (nomDuClient === 'perso') {
        nomDuClient = 'Projets personnels';
    } else {
        nomDuClient = `Projets de ${nomDuClient}`;
    }

    return (
        <>
            <h1>{nomDuClient}</h1>

            {/* Filtres */}
            <FiltresDeClient
                client={router.query.client}
                annee={props.annees}
            />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    marginTop: '15px',
                }}
            >
                {props.projets.map((projet) => (
                    <CarteDeProjet projet={projet} />
                ))}

                {/* <CarteDeProjet />
                <CarteDeProjet />
                <CarteDeProjet />
                <CarteDeProjet /> */}
            </div>
        </>
    );
}

// LA PARTIE SERVEUR AVEC LE PROPS ET LE PATHS

export async function getStaticPaths() {
    // connexion à MongoDB
    const client = await connectToDatabase();
    const db = client.db();

    // Récupérer les projets
    const projets = await db.collection('projets').find().toArray();

    let arrayPaths = projets.map((projet) => {
        if (projet.client == 'Projet personnel') {
            return 'perso';
        } else {
            return projet.client;
        }
    });

    // arrayPaths = [...new Set(arrayPaths)];
    const dynamicPaths = arrayPaths.map((path) => ({
        params: { client: path },
    }));
    console.log(dynamicPaths);
    return {
        paths: dynamicPaths,
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {
    // Les Variables
    let projets;
    let annees;
    // let client;

    const { params } = context;
    let clientParam = params.client;

    if (clientParam == 'perso') {
        clientParam = 'Projet personnel';
    }

    try {
        const client = await connectToDatabase();
        const db = client.db();

        // Récuperer les projets
        projets = await db
            .collection('projets')
            .find({ client: clientParam })
            .toArray();
        projets = JSON.parse(JSON.stringify(projets));

        annees = projets.map((projets) => projets.annee);
        annees = [...new Set(annees)];
    } catch (error) {
        projets = [];
    }

    return {
        props: {
            projets: projets,
            annees: annees,
        },
    };
}
