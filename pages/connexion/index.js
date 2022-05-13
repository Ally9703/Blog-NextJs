// Librairies
import { useForm } from 'react-hook-form';
// Composant
import Button from '../../components/ui/Button/Button';

export default function Connexion() {
    // Variables
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //Methode
    const onFormSubmittedHandler = (data) => {
        console.log(data);
    };

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
                    <form
                        onSubmit={handleSubmit(
                            onFormSubmittedHandler
                        )}
                    >
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
                            {errors.email &&
                                errors.email.type === 'required' && (
                                    <small style={{ color: 'red' }}>
                                        Vous devez renseigner ce
                                        champ.
                                    </small>
                                )}

                            {errors.email &&
                                errors.email.type === 'pattern' && (
                                    <small style={{ color: 'red' }}>
                                        La syntax de votre adresse
                                        email est incorrect veuillez
                                        vérifier de nouveau.
                                    </small>
                                )}
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
                            {errors.password && (
                                <small style={{ color: 'red' }}>
                                    Vous devez renseigner ce champ.
                                </small>
                            )}
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
