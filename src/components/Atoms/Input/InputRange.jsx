import styles from './Input.module.scss';

export default function InputRange({label, id, value, onChange}) {

  return (
    <>
      <div className={styles.label_wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <span className={styles.label} >{value}/5</span>
      </div>
      <input 
        className={styles.range} 
        type="range" 
        id={id} 
        name={id} 
        min="0" 
        max="5" 
        step="0.5" 
        value={value}
        onChange={onChange}
      />
    </>
  );
}