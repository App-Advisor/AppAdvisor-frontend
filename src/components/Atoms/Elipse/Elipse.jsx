import styles from "./Elipse.module.scss";

export default function Elipse({children}) {
    return (
        <p className={styles.elipse}>{children}</p>
    )
}