import styles from "./Card.module.scss";

export default function LoginCard({children}) {
    return (
        <form className={styles.login}>
            {children}
        </form>
    );
}