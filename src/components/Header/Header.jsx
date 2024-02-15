'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const pagesSpecifiques = ['/Profil', '/Outils'];
    const estSurPageSpecifique = pagesSpecifiques.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 100);
        };

        if (!estSurPageSpecifique) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (!estSurPageSpecifique) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [estSurPageSpecifique, pathname]); 

    const headerClass = estSurPageSpecifique || isScrolled ? styles.bleu : styles.transparent;

    return (
        <header className={`${styles.header} ${headerClass}`}>
            <Navbar />
        </header>
    );
}
