import logo from '@/assets/logo.png';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
// import Bouton from '../../Bouton/button';

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.image}>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
            </div>
            <div>
                <ul className={styles.navbar}>
                <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/Categories">Catégories</Link></li>
                    <li><Link href="/Outils">Outils</Link></li>
                    <li><Link href="/Statistiques">Statistiques</Link></li>
                </ul>
            </div>
            <button  className={styles.button}>Connexion</button >
        </div>
    );
}
