import styles from "./OutilCard.module.scss";
import Rating from "@/components/Atoms/Rating/Rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from "@/components/Atoms/Button/Button";
import Img from "@/components/Atoms/Img/Img";

export default function OutilCard({image, nom, avis, note, starSize, nomUtilisateur}) {
    return (
        <div className={styles.card}>
            <Img src={image} height={175} width="100%" objectFit="scale-down"/>
            <div className={styles.separator}/>
            <div className={styles.card_container}>
                <div className={styles.card_textWrapper}>
                    <div className={styles.card_content}>
                        <h3>{nom}</h3>
                        <Rating note={note} starSize={starSize}/>
                    </div>
                    <div className={styles.card_content}>
                        <h3 className={styles.text_orange}>{nomUtilisateur}</h3>
                        <div className={styles.calendar}>
                            <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
                            <p>8 jours</p>
                        </div>
                    </div>
                    <p className={styles.card_paragraph}>{avis}</p>
                </div>
                <Button text="Voir plus" />
            </div>
        </div>
    )
}