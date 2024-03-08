import styles from "./page.module.scss";
import zigzag from "@/assets/zigzag.svg";
import framework from "@/assets/svelte.png";
import OutilCard from "@/components/Molecules/OutilCard/OutilCard";
import SearchBar from "@/components/Molecules/SearchBar/SearchBar";
import Img from "@/components/Atoms/Img/Img";
import H1 from "@/components/Atoms/Title/H1/H1";
import H2 from "@/components/Atoms/Title/H2/H2";
import Container from "@/components/Atoms/Container/Container";
import WrapperRow from "@/components/Atoms/Wrapper/WrapperRow";
import Mask from "@/components/Atoms/Mask/Mask";

export default function Home() {
  return (
  <main className={styles.main}>
    <div className={styles.hero}>
      <Mask backgroundColor="rgba(0, 0, 0, 0.5)"/>
      <div className={styles.hero_container}>
        <Img src={zigzag} width={70} height={15} objectFit="cover"/>
        <H1>Découvrez les meilleures solutions pour votre développement web</H1>
        <SearchBar/>
      </div>
    </div>

    <Container flexDirection="column" alignItems="center" gap="50px" paddingTop="100px">
      <H2>Selection d'avis sur les outils</H2>
      <WrapperRow width="100%" justifyContent="center" gap="20px" wrap="wrap">
        <OutilCard image={framework} 
          nom="Svelte" 
          avis="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." 
          note={2.4}
          starSize={20}
          nomUtilisateur="Jean Dupont"  
        />
        <OutilCard 
          image={framework} 
          nom="Vue" 
          avis="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi." 
          note={4}
          starSize={20}
          nomUtilisateur="Paul Dupont"
        />
        <OutilCard 
          image={framework} 
          nom="Next"
          avis="Un peu vieux ce framework, Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. corporis praesentium a laudantium internos." 
          note={3.2} 
          starSize={20}
          nomUtilisateur="Jeanne Dupont"
        />
      </WrapperRow>
    </Container>
  </main>
  );
}
