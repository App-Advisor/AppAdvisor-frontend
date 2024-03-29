import styles from './Input.module.scss';

export default function InputText({ type, name, placeholder, value, onChange }) {
  return (
    <input className={styles.input} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  );
}