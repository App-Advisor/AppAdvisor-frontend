import styles from "./UserCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function UserCard({avis, note, nomUtilisateur}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_container}>
                <div className={styles.card_content}>
                    <h3>{nomUtilisateur}</h3>
                    <div className={styles.avis}>
                        <FontAwesomeIcon className={styles.icon} icon={faStar}/>
                        <p>{note}/5</p>
                    </div>
                </div>
                <p>{avis}</p>
            </div>
        </div>
    )
}