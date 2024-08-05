import { useState, useEffect } from "react";

import { color } from "../constant/style";

import Header from "../components/common/Header";
import SelectWalkMenu from "../components/WalkPage/Walk/SelectWalkMenu";
import Walk from "../components/WalkPage/Walk/Walk";
import CalendarComponent from "../components/WalkPage/Calendar/CalendarComponent";
import StartStop from "../components/WalkPage/Walk/StartStop";
import Modal from "../components/common/Modal";

import { useRecoilState } from "recoil";
import { nowWalkState, todayWalkState, walkModalState, walkTimeState } from "../recoil/walk";
import WalkHistoryComponent from "../components/WalkPage/Calendar/WalkHistoryComponent";

import { useNavigate } from "react-router-dom";
import { dogInfoState } from "../recoil/dog";
import { fetchTodayWalkData } from "../apis/api/walk";

const WalkPage = () => {
  const [walkMenu, setWalkMenu] = useState("walk");
  const [isOpen, setIsOpen] = useRecoilState(walkModalState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);
  const [todayWalk, setTodayWalk] = useRecoilState(todayWalkState);
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);

  const navigate = useNavigate();

  const walkMenuHandler = menu => {
    setWalkMenu(menu);
  };

  useEffect(() => {
    const getTodayWalkData = async () => {
      try {
        const todayWalkData = await fetchTodayWalkData();
        // console.log(todayWalkData);
        const [minutes, seconds] = todayWalkData.data["todayWalkTime"].split(":").map(Number);
        setTodayWalk({ todayWalkTime: minutes * 60 + seconds, round: todayWalkData.data.round });
      } catch (error) {
        throw new Error(error);
      }
    };

    if (localStorage.getItem("accessToken")) {
      getTodayWalkData();
    }
  }, [nowWalk, isOpen, walkTime]);

  useEffect(() => {
    console.log("Updated todayWalk:", todayWalk);
  }, [todayWalk]);

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
            height: (nowWalk.finish || dogInfo.walkingGoal === null) && walkMenu == "walk" ? 642 : "auto",
          }}
        >
          <SelectWalkMenu walkMenu={walkMenu} walkMenuHandler={walkMenuHandler} />
          {walkMenu === "walk" && <Walk dogName={dogInfo.dogName} />}
        </div>
        {walkMenu == "calendar" && <CalendarComponent />}

        {walkMenu === "walk" && !nowWalk.finish && dogInfo.walkingGoal != null && <StartStop />}
        {walkMenu === "calendar" && <WalkHistoryComponent />}
      </div>
    </>
  );
};

export default WalkPage;
