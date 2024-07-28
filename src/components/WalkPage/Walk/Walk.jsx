import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  nowWalkState,
  totalSecondState,
  walkTimeState,
} from "../../../recoil/walk";

import { color } from "../../../constant/style";

import WalkTime from "./WalkTime";
import Progress from "./Progress";
import WalkState from "./WalkState";
import Button from "../../common/Button";
import { dogInfoState } from "../../../recoil/dog";

const Walk = ({ dogName }) => {
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const [totalSeconds, setTotalSeconds] = useRecoilState(totalSecondState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);

  const [walkState, setWalkState] = useState("");

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
        setWalkTime((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [nowWalk.now, setWalkTime]);

  return (
    <div>
      <h1
        style={{ textAlign: "center", position: "absolute", left: "28%" }}
        className="bold-text text24 letter-spacing8"
      >
        <span style={{ color: color.primaryColor }}>{dogInfo.name==undefined ? '임시' : dogInfo.name}</span> 와 함께
        <br />
        {walkState}
      </h1>

      <div>
        {nowWalk.finish || walkTime >= totalSeconds ? (
          <img
            style={{ width: "100%" }}
            src={`/img/walkGIF/after-walk.gif`}
            alt=""
          />
        ) : walkState === "산책전" ? (
          <img
            style={{ width: "100%" }}
            src={`/img/walkGIF/before-walk.gif`}
            alt=""
          />
        ) : (
          <img
            style={{ width: "100%" }}
            src={`/img/walkGIF/ing-walk.gif`}
            alt=""
          />
        )}
      </div>

      <WalkTime />

      <Progress />

      <WalkState />

      {nowWalk.finish && (
        <div style={{ margin: "14px 0 6px 0" }}>
          <Button
            onClick={() => {
              setNowWalk({ first: false, now: false, finish: false });
            }}
          >
            확인 완료
          </Button>
        </div>
      )}
    </div>
  );
};

export default Walk;
