import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Fragment>
      {showMobileMenu ? (
        <div className={styles.mobileMenu}>
          <MobileMenu setShowMobileMenu={setShowMobileMenu} />
        </div>
      ) : null}
      <div className={styles.header}>
        <div className={styles.header__bars}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
        <li className={styles.header__menu}>
          <ul>HOME</ul>
          <ul>ABOUT US</ul>
          <ul>CONTACT</ul>
        </li>
      </div>
    </Fragment>
  );
}
