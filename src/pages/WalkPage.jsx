import { useState } from "react";

import { color } from "../constant/style";

import Header from "../components/common/Header";
import SelectWalkMenu from "../components/WalkPage/SelectWalkMenu";
import Walk from "../components/WalkPage/Walk";
import Calendar from "../components/WalkPage/Calendar";
import StartStop from "../components/WalkPage/StartStop";

// import styles from "../css/WalkPage/WalkPage.module.scss"

const WalkPage = () => {
  const [walkMenu, setWalkMenu] = useState("walk");

  const walkMenuHandler = menu => {
    setWalkMenu(menu);
  };

  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(to bottom, ${color.primaryColor00} 0%, ${color.primaryColor01} 49%, ${color.primaryColor30} 100%)`,
      }}
    >
      <Header>산책하기</Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "12px 16px",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <SelectWalkMenu walkMenu={walkMenu} walkMenuHandler={walkMenuHandler} />
        {walkMenu === "walk" ? <Walk /> : <Calendar />}
      </div>

      {walkMenu === "walk" && <StartStop />}
    </div>
  );
};

export default WalkPage;
