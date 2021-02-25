import { useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import styles from '../Styles/components/Profile.module.css';
export function Profile() {

    const{level} = useContext(ChallengsContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/acrisandrade.png" alt="Simplifica.code" />

            <div>
                <strong>Simplifica.Code</strong>
                <p>
                    <img src="icons/nivel.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}