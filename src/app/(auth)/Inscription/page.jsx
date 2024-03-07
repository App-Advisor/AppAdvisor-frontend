import Button from "@/components/Atoms/Button/Button";
import styles from "./page.module.scss";
import InputText from "@/components/Atoms/Input/InputText";

export default function Inscription() {
  return (
    <main className={styles.main}>
        <div className={styles.mask}/>
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Inscription</h2>
                <InputText type="text" placeholder="Nom"/>
                <InputText type="email" placeholder="Email"/>
                <InputText type="password" placeholder="Mot de passe"/>
                <Button text="S'inscrire"/>
            </form>
        </div>
    </main>
  );
}