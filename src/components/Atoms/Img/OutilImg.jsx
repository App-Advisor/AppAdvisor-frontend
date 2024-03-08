import styles from "./Img.module.scss";

export default function OutilImg({children, bgColor}) {
    return (
        <div className={styles.logo_background}>
            <div className={styles.logo_border}>
                <div style={{background: bgColor}} className={styles.logo}>
                    {children}
                </div>
            </div>
        </div>
    )
}