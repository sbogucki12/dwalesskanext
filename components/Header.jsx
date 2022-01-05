import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__bars}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <li className={styles.header__menu}>
        <ul>HOME</ul>
        <ul>ABOUT US</ul>
        <ul>CONTACT</ul>
      </li>
    </div>
  );
}
