
import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../Context/CountdownContext';
 import styles from '../Styles/components/Countdown.module.css';

   
    export function Countdown() {
        const{minutes,
            seconds,
            hasFinished,
            isactive,
            startCountdown,
            resetCountdown
        } = useContext(CountdownContext)
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    

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