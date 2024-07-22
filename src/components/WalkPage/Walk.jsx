import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dogNameState } from "../../recoil/dog";
import { nowWalkState, totalSecondState, walkTimeState } from "../../recoil/walk";

import { color } from "../../constant/style";

import WalkTime from "./WalkTime";
import Progress from "./Progress";
import WalkState from "./WalkState";

const Walk = () => {
  const [dogName, setDogName] = useRecoilState(dogNameState);
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const totalSeconds = useRecoilValue(totalSecondState);

  const [walkState, setWalkState] = useState("산책전");

  useEffect(() => {
    let interval;
    if (nowWalk) {
      interval = setInterval(() => {
        setWalkTime(prevSeconds => {
          if (prevSeconds < totalSeconds) {
            return prevSeconds + 1;
          } else {
            clearInterval(interval);
            return prevSeconds;
          }
        });
      }, 1000);
    } else if (!nowWalk && walkTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [nowWalk, totalSeconds, setWalkTime]);

  return (
    <div>
      <h1 style={{ textAlign: "center", position: "absolute", left: "28%" }} className="bold-text text24 letter-spacing8">
        <span style={{ color: color.primaryColor }}>{dogName}</span> 와 함께
        <br />
        {walkState}
      </h1>

      <div>
        {walkTime >= totalSeconds ? (
          <img style={{ width: "100%" }} src={`/img/walkGIF/산책후.gif`} alt="" />
        ) : (
          <img style={{ width: "100%" }} src={`/img/walkGIF/${walkState}.gif`} alt="" />
        )}
      </div>

      <WalkTime />

      <Progress />

      <WalkState />
    </div>
  );
};

export default Walk;
