import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { nowWalkState, todayWalkState, totalSecondState, walkTimeState } from "../../../recoil/walk";

import { color } from "../../../constant/style";

import WalkTime from "./WalkTime";
import Progress from "./Progress";
import WalkState from "./WalkState";
import Button from "../../common/Button";

import { dogInfoState } from "../../../recoil/dog";

import styles from "../../../css/WalkPage/Walk.module.scss";
import { useNavigate } from "react-router-dom";

const Walk = ({ dogName }) => {
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const [totalSeconds, setTotalSeconds] = useRecoilState(totalSecondState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);

  const [walkState, setWalkState] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const newState = nowWalk.finish ? "산책후" : nowWalk.now ? "산책중" : "산책전";
    if (newState !== walkState) {
      setWalkState(newState);
    }
  }, [nowWalk, walkState]);

  useEffect(() => {
    let interval;
    if (nowWalk.now) {
      interval = setInterval(() => {
        setWalkTime(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [nowWalk.now, setWalkTime]);

  return (
    <div style={{ position: "relative", height: "65vh" }}> 
      <h1 style={{ textAlign: "center" }} className="bold-text text24 letter-spacing8">
        <span style={{ color: color.primaryColor }}>{dogInfo.name == undefined ? "임시" : dogInfo.name}</span> 와 함께
        <br />
        {walkState}
      </h1>

      <div className={styles.gifWrapper}>
        {nowWalk.finish ? (
          <img style={{ width: "100%" }} src={`/img/walkGIF/after-walk.gif`} alt="" />
        ) : walkState === "산책전" ? (
          <img style={{ width: "100%" }} src={`/img/walkGIF/before-walk.gif`} alt="" />
        ) : (
          <img style={{ width: "100%" }} src={`/img/walkGIF/ing-walk.gif`} alt="" />
        )}
      </div>

      <div  className={styles.clearfix} style={{ width: "100%", padding: "12px 0 8px 0", position: "absolute", bottom: 0, backgroundColor: "white"}}>
        <WalkTime />

        <Progress />

        <WalkState />
      </div>

      <div style={{ margin: "120px 0 4px 0"}}>
        {dogInfo.walkingGoal == null && (
          <Button
            onClick={() => {
              navigate("/myPage");
            }}
          >
            목표 설정하러 가기
          </Button>
        )}

        {nowWalk.finish && (
          <Button
            onClick={() => {
              setNowWalk({ first: false, now: false, finish: false });
              setWalkTime(0);
            }}
          >
            확인 완료
          </Button>
        )}
      </div>
    </div>
  );
};

export default Walk;
