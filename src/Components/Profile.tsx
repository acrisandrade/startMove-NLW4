import styles from '../Styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/acrisandrade.png" alt="Simplifica.code" />

            <div>
                <strong>Simplifica.Code</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}