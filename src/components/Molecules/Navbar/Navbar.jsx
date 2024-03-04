import logo from '@/assets/logo.png'
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Atoms/Button/Button';

export default function Navbar() {

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.image}>
                    <Image fill src={logo} style={{objectFit:"cover"}}/>
                </div>
            </div>
            <div>
                <ul className={styles.navbar}>
                    <li><Link className={styles.link} href="/">Accueil</Link></li>
                    <li><Link className={styles.link} href="/Categories">Catégories</Link></li>
                    <li><Link className={styles.link} href="/Outils">Outils</Link></li>
                    <li><Link className={styles.link} href="/Statistiques">Statistiques</Link></li>
                </ul>
            </div>
            <Button text="Connexion" />
        </div>
    );
}