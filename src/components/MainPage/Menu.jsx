import { useNavigate } from "react-router-dom";

import styles from "../../css/MainPage/Menu.module.scss";

import { color } from "../../constant/style";

const Menu = () => {
  const itemData = [
    { imgUrl: "/img/AIDoctor.png", text: "AI 닥터에게\n질문하러 가기", url: "/chat" },
    { imgUrl: "/img/walking.png", text: "산책\n하러 가기", url: "/walk" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <h3>매일 확인하세요✔️</h3>

      <div className={styles.menuWrapper}>
        {itemData.map((item, i) => (
          <MenuItem item={item} key={i} navigate={navigate} />
        ))}
      </div>
    </>
  );
};

const MenuItem = ({ item, navigate }) => {
  return (
    <div onClick={()=>{navigate(`${item.url}`)}} style={{ backgroundColor: color.gray100, borderRadius: 10, padding: 24, cursor: "pointer" }}>
      <img src={item.imgUrl} alt="" />
      <p style={{ whiteSpace: "pre-line", color: color.gray700, fontWeight: 600, marginTop: 24 }}>{item.text}</p>
    </div>
  );
};

export default Menu;
