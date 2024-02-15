import logo from '@/assets/logo.png'
import styles from './Navbar.module.scss';
import Image from 'next/image';

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
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">Catégories</a></li>
                    <li><a href="#services">Outils</a></li>
                    <li><a href="#contact">Statistiques</a></li>
                </ul>
            </div>
            <div>
                <button className={styles.button}>Get Started</button>
            </div>
        </div>
    );
}