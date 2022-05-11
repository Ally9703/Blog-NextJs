// Librairies
import classes from './CarteDeProjet.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CarteDeProjet(props) {
    // Variable
    const router = useRouter();
    // const slug = 'alliance';
    const { titre, client, annee, description, slug } = props.projet;

    return (
        <Link href={`/projets/${slug}`}>
            <a className={classes.CarteDeProjet}>
                {/* <h3>Alliance</h3> */}
                <h3>{titre} </h3>
                {/* <p>
                    Création d'une plateforme permettant de réunir
                    tous les passionnés de l'informatique pour créer
                    de nouveaux projets et apprendre de nouvelles
                    choses.
                </p> */}
                <p>{description}</p>
            </a>
        </Link>
    );
}
