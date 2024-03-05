import Link from 'next/link';
import styles from './Button.module.scss';

export default function SecondaryBtn({ text, onClick, link }) {
    return (
        <Link href={`/${link}`}>
            <button className={styles.secondaryBtn} onClick={onClick}>{text}</button>
        </Link>
    )
}