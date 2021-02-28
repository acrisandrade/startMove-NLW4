import { Children, ReactNode, useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import styles from '../Styles/components/Home.module.css';
import GoogleLogin from 'react-google-login';
import ReactDOM, { render } from 'react-dom';


const responseGoogle = (response) => {
    console.log(response);
}

export function Inicial() {
    const{login} = useContext(ChallengsContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>Start move</header>
                <div>
                    <strong>Bem-Vindo</strong>
                    <p>Faça Login para começar.</p>
                    <GoogleLogin
                        clientId="275208676703-9hptl0ot9ceisr89rhbq00m1mlf8hljr.apps.googleusercontent.com"
                        render={renderProps => (
                            <button type="button" onClick={renderProps.onClick}>
                                Logar
                            </button>
                        )}
                        buttonText="Login"
                        onSuccess={login}
                        isSignedIn={true}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </div>
        
    )
    
}


