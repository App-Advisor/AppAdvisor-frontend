import styles from './Input.module.scss';

export default function InputText({ type, placeholder, value, onChange }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange}/>
  );
}