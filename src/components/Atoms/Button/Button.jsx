import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({ text, onClick, link }) {
    return (
        <Link href={`${link}`}>
            <button className={styles.button} onClick={onClick}>{text}</button>
        </Link>
    )
}