import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dogNameState } from "../../../recoil/dog";
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

const Walk = () => {
  const [dogName, setDogName] = useRecoilState(dogNameState);
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const totalSeconds = useRecoilValue(totalSecondState);
  // const totalSeconds = 10;

  const [walkState, setWalkState] = useState();
  useEffect(() => {
    setWalkState(
      nowWalk.finish ? "산책후" : nowWalk.first ? "산책중" : "산책전"
    );
  }, [nowWalk]);

  useEffect(() => {
    let interval;
    if (nowWalk.now) {
      interval = setInterval(() => {
        setWalkTime((prevSeconds) => {
          return prevSeconds + 1;
        });
      }, 1000);
    } else if (!nowWalk && walkTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [nowWalk.now, totalSeconds, setWalkTime]);

  return (
    <div>
      <h1
        style={{ textAlign: "center", position: "absolute", left: "28%" }}
        className="bold-text text24 letter-spacing8"
      >
        <span style={{ color: color.primaryColor }}>{dogName}</span> 와 함께
        <br />
        {walkState}
      </h1>

      <div>
        {/* 산책 시간이 목표시간보다 클 때 혹은 산책 끝났을때 */}
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
              // 산책후 시간 로직 처리 필요함
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
