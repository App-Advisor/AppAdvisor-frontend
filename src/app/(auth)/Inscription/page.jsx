import Button from "@/components/Atoms/Button/Button";
import styles from "./page.module.scss";
import Input from "@/components/Atoms/Input/Input";

export default function Inscription() {
  return (
    <main className={styles.main}>
        <div className={styles.mask}/>
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Inscription</h2>
                <Input type="text" placeholder="Nom"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Mot de passe"/>
                <Button text="S'inscrire"/>
            </form>
        </div>
    </main>
  );
}