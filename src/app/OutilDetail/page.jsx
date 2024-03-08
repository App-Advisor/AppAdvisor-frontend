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
import Container from '@/components/Atoms/Container/Container';
import Wrapper from '@/components/Atoms/Wrapper/Wrapper';
import H3 from '@/components/Atoms/Title/H3/H3';
import WrapperRow from '@/components/Atoms/Wrapper/WrapperRow';
import H1 from '@/components/Atoms/Title/H1/H1';
import P from '@/components/Atoms/Paragraph/P';
import Elipse from '@/components/Atoms/Elipse/Elipse';
import OutilImg from '@/components/Atoms/Img/OutilImg';
import H2 from '@/components/Atoms/Title/H2/H2';
import TextArea from '@/components/Atoms/Input/TextArea';

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
            <Container paddingTop="100px" alignItems="center" justifyContent="space-between" height="100vh">
                <Wrapper width="40%" gap="15px">
                    <div>
                        <H3 color="#DF6951">{categorie}</H3>
                        <WrapperRow alignItems="center" gap="10px">
                            <H1 color="#181E4B">{nomOutil}</H1>
                            <Rating note={4} starSize={25} />
                            <P>({nbAvis} avis)</P>
                        </WrapperRow>
                    </div>
                    <div>
                        <Elipse>{description}</Elipse>
                        <Link style={{textDecoration: "underline"}} href="#description">Voir plus</Link>    
                    </div>
                    <Button text="Donner un avis" link="#avis"/>
                </Wrapper>
                <WrapperRow width="50%" height="400px" alignItems="center" justifyContent="center">
                    <OutilImg bgColor={bgColor}>
                        <Img src={logo} height="50%" width="100%" objectFit="scale-down"/>
                    </OutilImg>
                </WrapperRow>
            </Container>

            <Container id="description" alignItems="center" justifyContent="space-between">
                <Wrapper width="40%" gap="15px">
                    <H2>Description</H2>
                    <P>{description}</P>
                    <Button text="Classement" link="/Statistiques"/>
                </Wrapper>
                <WrapperRow width="40%" alignItems="center" justifyContent="space-between">
                    <Wrapper justifyContent="center" alignItems="center" gap="10px">
                        <Pourcentage percentage={80} colorStart="#FF4098" colorEnd="#FFB47D" />
                        <P>Difficulté</P>
                    </Wrapper>
                    <Wrapper justifyContent="center" alignItems="center" gap="10px">
                        <Pourcentage percentage={60} colorStart="#10E7FF" colorEnd="#8437FF" />
                        <P>Performance</P>
                    </Wrapper>
                    <Wrapper justifyContent="center" alignItems="center" gap="10px">
                        <Pourcentage percentage={40} colorStart="#D820F9" colorEnd="#7202FF" />
                        <P>Flexibilité</P>
                    </Wrapper>
                </WrapperRow>
            </Container>

            <Container justifyContent="center" paddingTop="100px">
                <div className={styles.form_wrapper}>
                    <H2>Donner un avis</H2>
                    <Wrapper width="100%" gap="20px">
                        <TextArea message="message" />
                        <WrapperRow justifyContent="space-between" gap="20px">
                            <Wrapper width="50%" gap="20px">
                                <Wrapper width="100%" gap="10px">
                                    <InputRange label="Difficulté" id="difficulty" value={value.difficulty} onChange={(e) => handleSliderChange('difficulty', e.target.value)} />
                                </Wrapper>
                                <Wrapper width="100%" gap="10px">
                                    <InputRange label="Performance" id="performance" value={value.performance} onChange={(e) => handleSliderChange('performance', e.target.value)} />
                                </Wrapper>
                                <Wrapper width="100%" gap="10px">
                                    <InputRange label="Flexibilité" id="flexibility" value={value.flexibility} onChange={(e) => handleSliderChange('flexibility', e.target.value)} />
                                </Wrapper>
                            </Wrapper>
                            <Wrapper width="30%" gap="20px" alignItems="center" justifyContent="center">
                                <H3 color="#DF6951">Note globale</H3>
                                <Wrapper width="100%" gap="10px">
                                    <InputRange label="Note" id="note" value={value.note} onChange={(e) => handleSliderChange('note', e.target.value)} />
                                </Wrapper>
                                <Button text="Valider" link=""/>
                            </Wrapper>
                        </WrapperRow>
                    </Wrapper>    
                </div>
            </Container>

            <Container id="avis" flexDirection="column" alignItems="center" paddingTop="100px" gap="50px">
                <H2>Avis</H2>
                <WrapperRow justifyContent="center" wrap="wrap" gap="20px">
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
                </WrapperRow>
                <Button text="Voir plus" link="#avis"/>
            </Container>
        </main>
    );
}