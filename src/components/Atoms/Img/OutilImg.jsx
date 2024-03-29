import styles from "./Img.module.scss";

export default function OutilImg({children}) {
    return (
        <div className={styles.logo_background}>
            <div className={styles.logo_border}>
                <div className={styles.logo}>
                    {children}
                </div>
            </div>
        </div>
    )
}