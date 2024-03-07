import logo from '@/assets/logo.png'
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Button from '@/components/Atoms/Button/Button';
import Img from '@/components/Atoms/Img/Img';

export default function Navbar() {

    return (
        <div className={styles.container}>
            <Link href="/">
                <Img src={logo} height={50} width={150} objectFit="cover"/>
            </Link>
            <div>
                <ul className={styles.navbar}>
                    <li><Link className={styles.link} href="/">Accueil</Link></li>
                    <li><Link className={styles.link} href="/Categories">Catégories</Link></li>
                    <li><Link className={styles.link} href="/Outils">Outils</Link></li>
                    <li><Link className={styles.link} href="/Statistiques">Statistiques</Link></li>
                </ul>
            </div>
            <Button text="Connexion" link="/Connexion" />
        </div>
    );
}