
    import { useState, useEffect, useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
    import styles from '../Styles/components/Countdown.module.css';

    let countdownTimeout: NodeJS.Timeout;

    export function Countdown() {

    const {startNewChallenge}=useContext(ChallengsContext);
    const [time, setTime] = useState(0.1 * 60);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [isactive, setIsactive] = useState(false)

    const [hasFinished, sethasFinished] = useState(false)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
    setIsactive(true);
    }

    function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsactive(false);
    setTime(0.1 * 60);

    }

    useEffect(() => {
    if (isactive && time > 0) {
    countdownTimeout = setTimeout(() => {
    setTime(time - 1);
    }, 1000)
    } else if (isactive && time == 0) {
    sethasFinished(true);
    setIsactive(false);
    startNewChallenge();
    }
    }, [isactive, time]

    )

    return (
    <div>
    <div className={styles.CountdownContainer}>
    <div>
    <span>{minuteLeft}</span>
    <span>{minuteRight}</span>
    </div>
    <span>:</span>
    <div>
    <span>{secondLeft}</span>
    <span>{secondsRight}</span>
    </div>
    </div>

    {hasFinished ? (
    <button
    disabled
    className={styles.startCountdownButton}
    >
    Ciclo Encerrado
    </button>
    ) : (
    <>
    {isactive ? (
        <button
            type="button"
            className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
            onClick={resetCountdown}
        >
            Abandonar Ciclo
        </button>
    ) : (
            <button
                type="button"
                className={styles.startCountdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>

        )}
    </>


    )}
    </div>
    );
    }