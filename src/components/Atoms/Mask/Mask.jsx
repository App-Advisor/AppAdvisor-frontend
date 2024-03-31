import styles from "./Mask.module.scss";

export default function Mask({backgroundColor, backdropFilter}) {
  return (
    <div className={styles.mask} style={{
      backgroundColor: backgroundColor,
      backdropFilter: backdropFilter
    }}/>
  );
}