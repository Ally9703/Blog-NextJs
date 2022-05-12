// Librairies
import CarteDeProjet from '../components/CarteDeProjet/CarteDeProjet';
import { connectToDatabase } from '../helpers/mongodb';
import Head from 'next/head';
import Image from 'next/image';

export default function Index(props) {
    return (
        <main>
            <Head>
                <title>Le portfolio d'Alliance-Tshindayi</title>
            </Head>
            <h1>Bienvenue sur mon portfolio</h1>
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
                        Je m'appel <b>Alliance Tshindayi</b>
                    </h2>

                    <p>
                        Je suis développeur full-stack, je maitrise de
                        nombreuses technologies. Envie de collaborer
                        avec moi ?
                    </p>
                    <p>
                        <a
                            href='allytshindayi@gmail.com'
                            style={{
                                display: 'inline-block',
                                background: '#ee6c4d',
                                color: 'white',
                                padding: '10px 15px 10px 15px',
                                textDecoration: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            Contacter moi !
                        </a>
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
                        />
                    </div>
                </div>
            </div>

            <h2 style={{ marginTop: '45px' }}>
                Mes derniers Projets
            </h2>

            <di
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                }}
            >
                {props.projets.map((projet) => (
                    <CarteDeProjet projet={projet} key={projet._id} />
                ))}
            </di>
        </main>
    );
}
export async function getStaticProps() {
    // Variables
    let projets;

    try {
        //connexion à MongoDb
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
        },
    };
}
