import styles from "./Container.module.scss";

export default function Container({children, id, flexDirection, justifyContent, alignItems, height, padding, paddingTop, gap}) {
    return (
        <div style={{
            flexDirection: flexDirection,
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: height,
            padding: padding,
            paddingTop: paddingTop, 
            gap: gap,
            }} 
            id={id}
            className={styles.container}>
            {children}
        </div>
    )
}