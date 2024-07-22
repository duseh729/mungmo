import styles from "../../css/MainPage/Header.module.scss";

const MainHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <img src="/img/logos/logoMedium.png" alt="" />
      </div>

      <div className={styles.iconsWrapper}>
        <img src="/img/icons/alarm.png" className={styles.icon} alt="" />
        <img src="/img/icons/profile.png" className={styles.icon} alt="" />
      </div>
    </header>
  );
};

export default MainHeader;
