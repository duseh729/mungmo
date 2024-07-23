import { useState } from "react";

import { color } from "../constant/style";

import Header from "../components/common/Header";
import SelectWalkMenu from "../components/WalkPage/Walk/SelectWalkMenu";
import Walk from "../components/WalkPage/Walk/Walk";
import Calendar from "../components/WalkPage/Calendar";
import StartStop from "../components/WalkPage/Walk/StartStop";
import Modal from "../components/common/Modal";

import { useRecoilState } from "recoil";
import { walkModalState } from "../recoil/walk";

const WalkPage = () => {
  const [walkMenu, setWalkMenu] = useState("walk");
  const [isOpen, setIsOpen] = useRecoilState(walkModalState);

  const walkMenuHandler = menu => {
    setWalkMenu(menu);
  };

  return (
    <div
      className="container"
      style={{
        background: `linear-gradient(to bottom, ${color.primaryColor00} 0%, ${color.primaryColor01} 49%, ${color.primaryColor30} 100%)`,
        position: "relative",
      }}
    >
      {isOpen ? (
        <Modal
          leftBtn={{
            text: "아니요",
            onClick: () => {
              setIsOpen(false);
            },
          }}
          rightBtn={{
            text: "끝내기",
            onClick: () => {
              setIsOpen(false);
            },
          }}
        >
          산책을 끝내시겠어요?
        </Modal>
      ) : null}

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
