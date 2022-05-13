// Librairies
import classes from './CarteDeProjet.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function CarteDeProjet(props) {
	// Variables
	const router = useRouter();
	const { titre, description, annee, slug, client } = props.projet;

	return (
		<Link href={`/projets/${slug}`}>
			<a className={classes.CarteDeProjet}>
				<h3>{titre}</h3>
				<p>{description}</p>
			</a>
		</Link>
	);
}
