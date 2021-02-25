import { useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import { CountdownContext } from '../Context/CountdownContext';
import styles from '../Styles/components/ChallengeBox.module.css'
export function ChallengeBox(){

    const {activeChallenge, resetChallenge, CompleteChallenge} = useContext(ChallengsContext)  ;
    const{resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        CompleteChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();

    }

    return(
        <div className={styles.ChallengeBox}>

            {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount} Xp</header>
                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`}/>
                       <strong>Novo Desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>
                   <footer>
                       <button
                        type="button"
                        className={styles.challengeFailButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei

                        </button>

                       <button 
                       type="button"
                       className={styles.challengesucceesededButton}
                       onClick={handleChallengeSucceeded}
                       >
                           Completei
                       </button>
                   </footer>
               </div>
            ) : (
                <div className={styles.ChallengeBoxNotActive}>
                <strong>Finalize um ciclo para receber novos desafios..</strong>
                <p>
                    <img src="icons/star.svg" alt="Level Up"/>
                    Avance de nivel, completando os desafios!
                </p>
            </div>
            )
 }
        </div>

    )
}