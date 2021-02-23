
import { useState,useEffect } from 'react';
import styles from '../Styles/components/Countdown.module.css';
export function Countdown(){
    const[time,setTime] = useState(25 * 60);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const[active,setactive]=useState(false)

    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondsRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setactive(true);
    }
    useEffect(()=>{
        if(active && time>0){
            setTimeout(() => {
                setTime(time -1);
            }, 1000)
        }
    },[active,time]

    )

    return(
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
            <button 
            type="button" 
            className={styles.startCountdownButton}
            onClick={startCountdown}
            >
                Iniciar um ciclo                            
            </button>
        </div>
    );
}