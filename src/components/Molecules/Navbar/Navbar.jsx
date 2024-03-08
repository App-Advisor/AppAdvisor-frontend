import logo from '@/assets/logo.png'
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Button from '@/components/Atoms/Button/Button';
import Img from '@/components/Atoms/Img/Img';
import List from '@/components/Atoms/List/List';
import LinkItem from '@/components/Molecules/LinkItem/LinkItem';
import Container from '@/components/Atoms/Container/Container';

export default function Navbar() {

    return (
        <Container justifyContent="space-between" alignItems="center" height="80px">
            <Link href="/">
                <Img src={logo} height={50} width={150} objectFit="cover"/>
            </Link>
            <List>
                <LinkItem href="/">Accueil</LinkItem>
                <LinkItem href="/Categories">Catégories</LinkItem>
                <LinkItem href="/Outils">Outils</LinkItem>
                <LinkItem href="/Statistiques">Statistiques</LinkItem>
            </List>
            <Button text="Connexion" link="/Connexion" />
        </Container>
    );
}