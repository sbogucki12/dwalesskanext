import styles from "../styles/MobileMenu.module.css";

export default function MobileMenu(props) {
  return (
    <div className={styles.mobileMenu}>
      <div>
        <div
          className={styles.mobileMenu__exitBtn}
          onClick={() => props.setShowMobileMenu(false)}
        >
          X
        </div>
        <div className={styles.mobileMenu__list}>
          <ul>
            <li className={styles.mobileMenu__list__item}>HOME</li>
            <li className={styles.mobileMenu__list__item}>ABOUT US</li>
            <li className={styles.mobileMenu__list__item}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
