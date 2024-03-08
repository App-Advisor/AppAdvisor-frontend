import Button from "@/components/Atoms/Button/Button";
import styles from "./page.module.scss";
import InputText from "@/components/Atoms/Input/InputText";
import SecondaryBtn from "@/components/Atoms/Button/SecondaryBtn";
import Mask from "@/components/Atoms/Mask/Mask";
import Wrapper from "@/components/Atoms/Wrapper/Wrapper";
import H2 from "@/components/Atoms/Title/H2/H2";
import LoginCard from "@/components/Atoms/Card/LoginCard";
import WrapperRow from "@/components/Atoms/Wrapper/WrapperRow";

export default function Connexion() {
  return (
    <main className={styles.main}>
        <Mask backgroundColor="rgba(0, 0, 0, 0.3)" backdropFilter="blur(20px)"/>
        <Wrapper alignItems="center" justifyContent="center" height="100%" zIndex="20">
            <LoginCard>
                <H2 color="#050560">Connexion</H2>
                <InputText type="email" placeholder="Email"/>
                <InputText type="password" placeholder="Mot de passe"/>
                <WrapperRow justifyContent="space-between" width="100%" gap="10px">
                  <Button text="Se connecter" link="/"/>
                  <SecondaryBtn text="S'inscrire" link="/Inscription"/>
                </WrapperRow>
            </LoginCard>
        </Wrapper>
    </main>
  );
}