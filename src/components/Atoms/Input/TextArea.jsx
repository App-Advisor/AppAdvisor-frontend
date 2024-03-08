import styles from "./Input.module.scss";

export default function TextArea({message}) {
    return (
        <textarea 
            className={styles.message} 
            name={message} 
            id={message} 
            placeholder={message}>
            </textarea>
    )
}