import { useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import styles from '../Styles/components/ExperienceBar.module.css';
export function ExperienceBar() {
    const{currentExperience,experienceToNextLevel} = useContext(ChallengsContext)

    const percentToNextLevel =Math.round(currentExperience*100)/experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${experienceToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${experienceToNextLevel}%` }}>
                    {currentExperience }Xp
                </span>
                </div>
            <span>{experienceToNextLevel}Xp</span>
        </header>
    );
}