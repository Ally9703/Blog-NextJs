// Librairies
// import { useForm } from 'react-hook-from';
// Composant
import Button from '../../components/ui/Button/Button';

export default function Connexion() {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '35' }}>
                Connexion
            </h1>
            ;
            <section
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <main
                    style={{
                        backgroundColor: '#f3f3f3',
                        padding: '30px',
                    }}
                >
                    <form>
                        <p>
                            <label htmlFor='email'>
                                Adresse email
                            </label>
                            <input
                                type='email'
                                placeholder='Adresse email'
                                className='input'
                            />
                        </p>

                        <p>
                            <label htmlFor='password'>
                                Mot de passe
                            </label>
                            <input
                                type='password'
                                placeholder='Mot de passe'
                                className='input'
                            />
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <Button>Je me connecte</Button>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}
