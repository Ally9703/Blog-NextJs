// Librairies
import classes from './Header.module.css';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function Header() {
    // Variables
    const router = useRouter();
    const [session, loading] = useSession();

    // Méthode
    const onLogoutClickedHandler = () => {
        signOut();
        router.push('/');
    };

    return (
        <header className={classes.Header}>
            <div
                className='container'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ margin: 0 }}>Alliance</h1>
                <nav>
                    <ul
                        style={{
                            display: 'flex',
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0,
                            gap: '15px',
                        }}
                    >
                        <li>
                            <Link href='/'>Accueil</Link>
                        </li>
                        <li>
                            <Link href='/projets'>Projets</Link>
                        </li>

                        {!session && !loading && (
                            <>
                                <li>
                                    <Link href='/connexion'>
                                        Connexion
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/inscription'>
                                        Inscription
                                    </Link>
                                </li>
                            </>
                        )}
                        {session && (
                            <>
                                <li>
                                    <Link href='/ajouter'>
                                        Ajouter
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        onClick={
                                            onLogoutClickedHandler
                                        }
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Déconnexion
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
