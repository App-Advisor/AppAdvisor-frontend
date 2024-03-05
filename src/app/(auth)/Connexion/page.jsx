import Button from "@/components/Atoms/Button/Button";
import styles from "./page.module.scss";
import Input from "@/components/Atoms/Input/Input";
import SecondaryBtn from "@/components/Atoms/Button/SecondaryBtn";

export default function Connexion() {
  return (
    <main className={styles.main}>
        <div className={styles.mask}/>
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Connexion</h2>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Mot de passe"/>
                <div className={styles.button_wrapper}>
                  <Button text="Se connecter" link=""/>
                  <SecondaryBtn text="S'inscrire" link="Inscription"/>
                </div>
                
            </form>
        </div>
    </main>
  );
}