import Image from "next/image";
import styles from "./OutilCard.module.scss";
import Rating from "@/components/Atoms/Rating/Rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Button from "@/components/Atoms/Button/Button";

export default function OutilCard({image, nom, avis, note, nomUtilisateur}) {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <Image fill src={image} style={{objectFit:"scale-down"}}/>
            </div>
            <div className={styles.separator}/>
            <div className={styles.card_container}>
                <div className={styles.card_textWrapper}>
                    <div className={styles.card_content}>
                        <h3>{nom}</h3>
                        <Rating note={note}/>
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