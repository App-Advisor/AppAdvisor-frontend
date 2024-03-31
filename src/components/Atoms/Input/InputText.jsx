import styles from './Input.module.scss';

export default function InputText({ type, placeholder, value }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} value={value}/>
  );
}