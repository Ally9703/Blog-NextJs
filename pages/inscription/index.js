// Les Librairies
import { useForm } from 'react-hook-form';

// Composant
import Button from '../../components/ui/Button/Button';

export default function Inscription() {
    // Variables
    const {
        register,
        handleSubmit,
        formState: { erros },
    } = useForm();

    //Methode
    const onFormSubmittedHandler = (data) => {
        console.log(data);
    };
    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '35' }}>
                Inscription
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
                    <form
                        onSubmit={handleSubmit(
                            onFormSubmittedHandler
                        )}
                    >
                        <p>
                            <label htmlFor='pseudo'>Pseudo</label>
                            <input
                                type='texte'
                                placeholder='pseudo'
                                className='input'
                                {...register('pseudo', {
                                    required: true,
                                })}
                            />
                        </p>

                        <p>
                            <label htmlFor='email'>
                                Adresse email
                            </label>
                            <input
                                type='email'
                                placeholder='Adresse email'
                                className='input'
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
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
                                {...register('password', {
                                    required: true,
                                })}
                            />
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <Button>Je m'inscris</Button>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}
