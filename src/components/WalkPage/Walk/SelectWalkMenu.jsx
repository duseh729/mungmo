import { color } from "../../../constant/style";

import styles from "../../../css/WalkPage/SelectWalkMenu.module.scss";

const SelectWalkMenu = ({ walkMenu, walkMenuHandler }) => {
  const menu = [
    { text: "기록하기", type: "walk" },
    { text: "캘린더", type: "calendar" },
  ];

  return (
    <div style={{ backgroundColor: color.gray100 }} className={styles.buttonWrapper}>
      {menu.map(item => (
        <button
          onClick={() => {
            walkMenuHandler(item.type);
          }}
          key={item.text}
          style={{
            color: walkMenu === item.type ? color.gray900 : color.gray500,
            backgroundColor: walkMenu === item.type ? "white" : "transparent",
            padding: "6px 14px",
          }}
          className="semi-bold-text text16"
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default SelectWalkMenu;
