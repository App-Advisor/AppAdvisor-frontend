'use client'

import Rating from '@/components/Molecules/Rating/Rating';
import styles from './page.module.scss';
import Button from '@/components/Atoms/Button/Button';
import logo from '@/assets/laravel_carre.png';
import Img from '@/components/Atoms/Img/Img';
import Pourcentage from '@/components/Atoms/Pourcentage/Pourcentage';
import UserCard from '@/components/Molecules/UserCard/UserCard';
import Link from 'next/link';
import InputRange from '@/components/Atoms/Input/InputRange';
import { useState } from 'react';

export default function OutilDetail() {

    const bgColor = "#181E4B";
    const nomOutil = "Laravel";
    const nbAvis = 12;
    const categorie = "Développement web";
    const description = "Laravel est un framework PHP open-source pour le développement d'applications web, créé par Taylor Otwell en 2011. Conçu pour faciliter la tâche des développeurs en fournissant des solutions élégantes aux problèmes courants du développement web, Laravel se distingue par sa syntaxe expressive et élégante. Il suit le modèle architectural Modèle-Vue-Contrôleur (MVC) qui aide à organiser le code de manière logique et claire, rendant le développement à la fois efficace et plaisant. Laravel offre une multitude de fonctionnalités prêtes à l'emploi, telles que l'authentification utilisateur, la gestion de sessions, la pagination, le routage, et plus encore. Il dispose également d'un puissant système de migration de base de données qui facilite le versionnage et le partage des schémas de base de données au sein d'une équipe. Eloquent ORM, un autre point fort de Laravel, fournit une interface de mappage objet-relationnel simple pour interagir avec la base de données à travers des modèles PHP.";
    const [value, setValue] = useState({
        difficulty: 2.5,
        performance: 2.5,
        flexibility: 2.5,
        note: 2.5,
      });
    
      const handleSliderChange = (id, newValue) => {
        setValue((prevValues) => ({
          ...prevValues,
          [id]: newValue,
        }));
      };

    return (
        <main>
            <div className={`${styles.container} ${styles.full_height}` }>
                <div className={styles.text_wrapper}>
                    <div>
                        <p className={styles.category}>{categorie}</p>
                        <div className={styles.align_center}>
                            <h1 className={styles.hero_title}>{nomOutil}</h1>
                            <Rating note={4} starSize={25} />
                            <p>({nbAvis} avis)</p>
                        </div>
                    </div>
                    <div>
                        <p className={styles.paragraph}>{description}</p>
                        <Link style={{textDecoration: "underline"}} href="#description">Voir plus</Link>    
                    </div>
                    <Button text="Donner un avis" link="#avis"/>
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

            <div id='description' className={styles.container}>
                <div className={styles.text_wrapper}>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <Button text="Classement" link="/Statistiques"/>
                </div>
                <div className={styles.notes_wrapper}>
                    <div className={styles.notes}>
                        <Pourcentage percentage={80} colorStart="#FF4098" colorEnd="#FFB47D" />
                        <p className={styles.notes_text}>Difficulté</p>
                    </div>
                    <div className={styles.notes}>
                        <Pourcentage percentage={60} colorStart="#10E7FF" colorEnd="#8437FF" />
                        <p className={styles.notes_text}>Performance</p>
                    </div>
                    <div className={styles.notes}>
                        <Pourcentage percentage={40} colorStart="#D820F9" colorEnd="#7202FF" />
                        <p className={styles.notes_text}>Flexibilité</p>
                    </div>
                </div>
            </div>

            <div className={styles.form_container}>
                <div className={styles.form_wrapper}>
                    <h2>Donner un avis</h2>
                    <form className={styles.form}>
                        <textarea className={styles.message} name="message" id="message" placeholder='message'></textarea>
                        <div className={styles.form_content}>
                            <div className={styles.input_wrapper}>
                                <div className={styles.input}>
                                    <InputRange label="Difficulté" id="difficulty" value={value.difficulty} onChange={(e) => handleSliderChange('difficulty', e.target.value)} />
                                </div>
                                <div className={styles.input}>
                                    <InputRange label="Performance" id="performance" value={value.performance} onChange={(e) => handleSliderChange('performance', e.target.value)} />
                                </div>
                                <div className={styles.input}>
                                    <InputRange label="Flexibilité" id="flexibility" value={value.flexibility} onChange={(e) => handleSliderChange('flexibility', e.target.value)} />
                                </div>
                            </div>
                            <div className={`${styles.input_wrapper} ${styles.right}`}>
                                <p className={styles.category}>note globale</p>
                                <div className={styles.input}>
                                    <InputRange label="Note" id="note" value={value.note} onChange={(e) => handleSliderChange('note', e.target.value)} />
                                </div>
                                <Button text="Valider" link=""/>
                            </div>
                        </div>
                    </form>    
                </div>
                
            </div>

            <div id='avis' className={styles.avis_container}>
                <h2>Avis</h2>
                <div className={styles.avis_list}>
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 10"
                        note={4}
                    />
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 15"
                        note={3}
                    />
                    <UserCard 
                        avis="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
                        nomUtilisateur="Jean du 13"
                        note={2}
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