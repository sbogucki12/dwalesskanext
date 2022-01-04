import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <li className={styles.menu}>
            <ul>HOME</ul>
            <ul>ABOUT US</ul>
            <ul>CONTACT</ul>
        </li>
    </div>
  );
}
