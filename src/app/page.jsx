import styles from "./page.module.scss";
import zigzag from "@/assets/zigzag.svg";
import framework from "@/assets/svelte.png";
import OutilCard from "@/components/Molecules/OutilCard/OutilCard";
import SearchBar from "@/components/Molecules/SearchBar/SearchBar";
import Img from "@/components/Atoms/Img/Img";

export default function Home() {
  return (
  <main className={styles.main}>
    <div className={styles.hero}>
      <div className={styles.hero_mask}/>
      <div className={styles.hero_container}>
        <Img src={zigzag} width={70} height={15} objectFit="cover"/>
        <h1>Découvrez les meilleures solutions pour votre développement web</h1>
        <SearchBar/>
      </div>
    </div>

    <div className={styles.tools}>
      <h2>Selection d'avis sur les outils</h2>
      <div className={styles.card_wrapper}>
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
      </div>
    </div>

    <div className={styles.category}>

    </div>
  </main>
  );
}
