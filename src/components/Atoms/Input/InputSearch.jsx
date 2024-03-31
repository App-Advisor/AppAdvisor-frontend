import styles from './Input.module.scss';

export default function InputSearch({ type, placeholder, value }) {
  return (
    <input className={styles.search} type={type} placeholder={placeholder} value={value}/>
  );
}