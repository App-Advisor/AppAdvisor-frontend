import styles from './Input.module.scss';

export default function InputButton({ text }) {
    return (
        <input type="submit" className={styles.button} value={text}/>
    )
}