import Link from 'next/link';
import styles from './LinkItem.module.scss';

const LinkItem = ({ href, children }) => (
  <li className={styles.linkItem}>
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  </li>
);

export default LinkItem;