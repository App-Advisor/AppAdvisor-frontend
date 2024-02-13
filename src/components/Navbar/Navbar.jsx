import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MaNav() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const pagesSpecifiques = ['/Profil', '/Outils'];
    const estSurPageSpecifique = pagesSpecifiques.includes(router.pathname);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        if (!estSurPageSpecifique) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (!estSurPageSpecifique) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [estSurPageSpecifique]); 

    const navClass = estSurPageSpecifique || isScrolled ? 'bleu' : '';

    return (
        <nav className={navClass}>
            <p>coucou</p>
        </nav>
    );
}
