import Rating from '@/components/Atoms/Rating/Rating';
import styles from './page.module.scss';
import Button from '@/components/Atoms/Button/Button';
import logo from '@/assets/laravel_carre.png';
import Img from '@/components/Atoms/Img/Img';
import Pourcentage from '@/components/Atoms/Pourcentage/Pourcentage';
import UserCard from '@/components/Molecules/UserCard/UserCard';

export default function OutilDetail() {

    const bgColor = "#181E4B";
    return (
        <main>
            <div className={`${styles.container} ${styles.full_height}` }>
                <div className={styles.text_wrapper}>
                    <div>
                        <p className={styles.category}>Catégorie</p>
                        <div className={styles.hero_text}>
                            <h1 className={styles.hero_title}>Nom de l'outil</h1>
                            <Rating note={4} starSize={25} />
                            <p>(2.3k avis)</p>
                        </div>
                    </div>
                    <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    <Button text="Classement" link="Statistiques"/>
                </div>
                <div className={styles.hero_img}>
                    <div className={styles.logo_background}>
                        <div className={styles.logo_border}>
                            <div style={{background: bgColor}} className={styles.logo}>
                                <Img src={logo} height="50%" width="100%" objectFit="scale-down"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <h2>Note globale</h2>
                    <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    <Button text="Noter" link="#avis"/>
                </div>
                <div className={styles.notes_wrapper}>
                    <Pourcentage percentage={80} colorStart="#FF4098" colorEnd="#FFB47D" />
                    <Pourcentage percentage={60} colorStart="#10E7FF" colorEnd="#8437FF" />
                    <Pourcentage percentage={40} colorStart="#D820F9" colorEnd="#7202FF" />
                </div>
            </div>

            <div className={styles.avis_container}>
                <h2>Avis</h2>
                <div className={styles.avis_list}>
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 12"
                        note={4}
                    />
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 12"
                        note={4}
                    />
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 12"
                        note={4}
                    />
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 12"
                        note={4}
                    />
                </div>
                <Button text="Voir plus" link="#avis"/>
            </div>
        </main>
    );
}