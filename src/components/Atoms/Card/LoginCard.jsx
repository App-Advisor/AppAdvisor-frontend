import styles from "./Card.module.scss";

export default function LoginCard({children, onSubmit}) {
    return (
        <form className={styles.login} onSubmit={onSubmit}>
            {children}
        </form>
    );
}