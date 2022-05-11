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
            <FiltresDeClient client={router.query.client} />

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
    return {
        paths: [{ params: { client: 'Allytech' } }],
        fallback: 'blocking',
    };
}

export async function getStaticProps(context) {
    // Les Variables
    let projets;
    let client;

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
    } catch (error) {
        projets = [];
    }

    return {
        props: {
            projets: JSON.parse(JSON.stringify(projets)),
        },
    };
}
