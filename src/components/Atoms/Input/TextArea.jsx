import styles from "./Input.module.scss";

export default function TextArea({message, placeholder, onChange}) {
    return (
        <textarea 
            className={styles.message} 
            name={message} 
            id={message} 
            value={message}
            onChange={onChange}
            placeholder={placeholder}>
            </textarea>
    )
}