// Les Librairies
import { connectToDatabase } from '../../helpers/mongodb';
// import { MongoClient } from 'mongodb';

// Composant
import CarteDeProjet from '../../components/CarteDeProjet/CarteDeProjet';

export default function Projets(props) {
    // console.log(props.projets);

    return (
        <>
            <h1>Mes Projets</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
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

export async function getStaticProps() {
    // Les Variables
    let projets;
    let client;

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
        projets = await db
            .collection('projets')
            .find()
            .sort({ dateDePublication: 'desc' })
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

// EXEMPLE DE CE QUE JE DOIS AUSSI ETUDIER POUR RESOUDRE MON PROBLEME DE CONNEXION

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Bless:<password>@cluster0.kh93b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
