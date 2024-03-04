import styles from "./page.module.scss";
import zigzag from "@/assets/zigzag.svg";
import Image from "next/image";

export default function Home() {
  return (
  <main className={styles.main}>
    <div className={styles.hero}>
      <div className={styles.hero_mask}/>
      <div className={styles.hero_container}>
        <div className={styles.zigzag}>
          <Image fill src={zigzag} style={{objectFit:"cover"}}/>
        </div>
        <h1>Découvrez les meilleures solutions pour votre développement web</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Recherchez votre framework, outil, ..."/>
          <input type="button" className={styles.button} value="Rechercher" />
        </form>
      </div>
    </div>

    <div className={styles.tool_list}>
      <h2>Selection d'avis sur les outils</h2>
    </div>
  </main>
  );
}
