import { useContext } from 'react';
import { ChallengsContext } from '../Context/ChallengesContext';
import Styles from '../Styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const{ level,closeLevelUp} = useContext(ChallengsContext)

    return (
    <div className={Styles.overlay}>
        <div className={Styles.container}>
            <header>{level}</header>
            <strong>Parabéns</strong>
            <p>você alcalçou um novo level</p>

            <button type ='button'onClick={closeLevelUp}>
                <img src="/icons/close.svg" alt="fechar"/>

            </button>

        </div>
    </div>
    )
}