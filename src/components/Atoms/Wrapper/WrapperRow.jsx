import styles from "./Wrapper.module.scss";

export default function WrapperRow({children, justifyContent, alignItems, width, height, padding, gap, wrap}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: alignItems,
            justifyContent: justifyContent,
            width: width,
            height: height,
            padding: padding,
            gap: gap,
            flexWrap: wrap
        }}>
            {children}
        </div>
    )
}