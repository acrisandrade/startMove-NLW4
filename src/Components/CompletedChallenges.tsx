import { useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import styles from'../Styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    const{challengesCompleted} = useContext(ChallengsContext);
    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
