import { useState } from "react";

import { color } from "../constant/style";

import Header from "../components/common/Header";
import SelectWalkMenu from "../components/WalkPage/Walk/SelectWalkMenu";
import Walk from "../components/WalkPage/Walk/Walk";
import CalendarComponent from "../components/WalkPage/Calendar/CalendarComponent";
import StartStop from "../components/WalkPage/Walk/StartStop";
import Modal from "../components/common/Modal";

import { useRecoilState } from "recoil";
import { nowWalkState, walkModalState } from "../recoil/walk";
import WalkHistoryComponent from "../components/WalkPage/Calendar/WalkHistoryComponent";

import { useNavigate } from "react-router-dom";
import { dogInfoState } from "../recoil/dog";

const WalkPage = () => {
  const [walkMenu, setWalkMenu] = useState("walk");
  const [isOpen, setIsOpen] = useRecoilState(walkModalState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);

  const navigate = useNavigate();

  const walkMenuHandler = menu => {
    setWalkMenu(menu);
  };

  return (
    <>
      <Header
        onClick={() => {
          navigate(-1);
        }}
      >
        산책하기
      </Header>
      
      <div
        className="container"
        style={{
          background:
            walkMenu === "walk"
              ? `linear-gradient(to bottom, ${color.primaryColor00} 0%, ${color.primaryColor01} 49%, ${color.primaryColor30} 100%)`
              : `linear-gradient(to bottom, ${color.bg200} 0%, ${color.bg201} 49%, ${color.bg230} 100%)`,
          position: "relative",
          height: "100vh"
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
                setNowWalk({ first: false, now: false, finish: true });
              },
            }}
          >
            산책을 끝내시겠어요?
          </Modal>
        ) : null}

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
          {walkMenu === "walk" && <Walk dogName={dogInfo.dogName} />}
        </div>
        {walkMenu == "calendar" && <CalendarComponent />}

        {walkMenu === "walk" && !nowWalk.finish && <StartStop />}
        {walkMenu === "calendar" && <WalkHistoryComponent />}
      </div>
    </>
  );
};

export default WalkPage;
