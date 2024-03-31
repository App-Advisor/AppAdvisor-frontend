import styles from "./SearchBar.module.scss";
import Button from "@/components/Atoms/Button/Button";
import InputSearch from "@/components/Atoms/Input/InputSearch";

export default function SearchBar() {
    return (
        <form className={styles.form}>
          <InputSearch type="text" placeholder="Recherchez votre framework, outil, ..."/>
          <Button text="rechercher" link="/"/>
        </form>
    )
}