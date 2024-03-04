import styles from "./SearchBar.module.scss";

export default function SearchBar() {
    return (
        <form className={styles.form}>
          <input type="text" placeholder="Recherchez votre framework, outil, ..."/>
          <input type="button" className={styles.button} value="Rechercher" />
        </form>
    )
}