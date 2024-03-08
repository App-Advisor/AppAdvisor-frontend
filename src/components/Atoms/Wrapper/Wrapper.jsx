import styles from "./Wrapper.module.scss";

export default function Wrapper({children, justifyContent, alignItems, width, height, padding, gap, zIndex}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: alignItems,
            justifyContent: justifyContent,
            width: width,
            height: height,
            padding: padding,
            gap: gap,
            position: "relative",
            zIndex: zIndex
        }}>
            {children}
        </div>
    )
}