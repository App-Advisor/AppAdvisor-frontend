import Button from "@/components/Atoms/Button/Button";
import styles from "./page.module.scss";
import InputText from "@/components/Atoms/Input/InputText";
import Mask from "@/components/Atoms/Mask/Mask";
import H2 from "@/components/Atoms/Title/H2/H2";
import Wrapper from "@/components/Atoms/Wrapper/Wrapper";
import LoginCard from "@/components/Atoms/Card/LoginCard";

export default function Inscription() {
  return (
    <main className={styles.main}>
        <Mask backgroundColor="rgba(0, 0, 0, 0.3)" backdropFilter="blur(20px)"/>
        <Wrapper alignItems="center" justifyContent="center" height="100%" zIndex="20">
            <LoginCard>
                <H2 color="#050560">Inscription</H2>
                <InputText type="text" placeholder="Nom"/>
                <InputText type="email" placeholder="Email"/>
                <InputText type="password" placeholder="Mot de passe"/>
                <Button text="S'inscrire"/>
            </LoginCard>
        </Wrapper>
    </main>
  );
}