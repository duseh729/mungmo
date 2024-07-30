import { useNavigate } from "react-router-dom";

import styles from "../../css/MainPage/Menu.module.scss";

import { color } from "../../constant/style";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../recoil/user";
import { useState } from "react";
import Toast from "../common/Toast";

const Menu = () => {
  const navigate = useNavigate();
  const itemData = [
    { imgUrl: "/img/AIDoctor.png", text: "AI 닥터에게\n질문하러 가기", url: "/chat" },
    { imgUrl: "/img/walking.png", text: "산책\n하러 가기", url: "/walk" },
  ];
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const [toastTrigger, setToastTrigger] = useState(false);

  function showToast() {
    setToastTrigger(true);
    setTimeout(() => {
      setToastTrigger(false);
    }, 1500);
  }

  return (
    <>
      <h3>매일 확인하세요✔️</h3>

      <div className={styles.menuWrapper} style={{ position: "relative" }}>
        {itemData.map((item, i) => (
          <MenuItem
            item={item}
            key={i}
            onClick={() => {
              i == 1 && isLogin == false ? showToast() : navigate(item.url);
            }}
          />
        ))}
        {toastTrigger && <Toast />}
      </div>
    </>
  );
};

const MenuItem = ({ item, onClick }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: color.gray100, borderRadius: 10, padding: 24, cursor: "pointer" }}>
      <img src={item.imgUrl} alt="" />
      <p style={{ whiteSpace: "pre-line", color: color.gray700, fontWeight: 600, marginTop: 24 }}>{item.text}</p>
    </div>
  );
};

export default Menu;
