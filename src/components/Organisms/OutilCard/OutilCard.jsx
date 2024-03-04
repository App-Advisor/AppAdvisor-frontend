import framework from "@/assets/svelte.png";
import Image from "next/image";
import styles from "./OutilCard.module.scss";

export default function OutilCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <Image fill src={framework} style={{objectFit:"scale-down"}}/>
            </div>
            <div className={styles.card_textWrapper}>
                <h3>coucou</h3>
                <p>coucou je suis le texte</p>
            </div>
        </div>
    )
}