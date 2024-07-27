import styles from "../../css/MainPage/Profile.module.scss";

import { color } from "../../constant/style";

import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const DefaultProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: "16px" }}>
        <h1 style={{ color: color.primaryColor }} className="bold-text text24 letter-spacing8">
          안녕하세요?
        </h1>
        <h1 className="text24 letter-spacing8">오늘도 좋은 하루 되세요</h1>
      </div>

      <div
        style={{
          background: `linear-gradient(to bottom right, ${color.lightPrimaryColor} 10%, ${color.primaryColor}) 90%`,
        }}
        className={styles.profileContainer}
      >
        <img src="/img/dogProfile/밥그릇.png" alt="" />

        <div style={{ textAlign: "center" }}>
          <span style={{ color: "white", backgroundColor: color.lightPrimaryColor }} className={`semi-bold-text text14 letter-spacing2 ${styles.profileState}`}>
            비로그인
          </span>

          <p style={{ color: "white", marginTop: "20px" }} className="text14 letter-spacing2">
            간편하게 로그인하고
            <br /> 댕댕이 건강 관리를 시작해 보세요!
          </p>
        </div>

        <Button onClick={()=>{navigate('login')}}>로그인하러 가기</Button>
      </div>
    </>
  );
};

export default DefaultProfile;
