import { useNavigate } from "react-router-dom";
import styles from "../../css/MainPage/Header.module.scss";

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoWrapper}>
        <img src="/img/logos/logo-medium.png" alt="" />
      </div>

      <div className={styles.iconsWrapper}>
        <button>
          <img style={{ display: "block" }} src="/img/icons/alarm.svg" className={styles.icon} alt="" />
        </button>
        <button onClick={()=>{navigate("myPage")}}>
          <img style={{ display: "block" }} src="/img/icons/profile.svg" className={styles.icon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
