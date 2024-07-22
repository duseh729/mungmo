import { useState, useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil"
import { totalSecondState, walkTimeState } from "../../recoil/walk"
import { dogInfoState } from "../../recoil/dog";

import { color } from "../../constant/style";

const Progress = ()=>{
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);
  const totalSeconds = useRecoilValue(totalSecondState);
  // const totalSeconds = 1 * 60; // 분을 초로 변환

  const progress = (walkTime / totalSeconds) * 100;

  return (
    <div style={{margin: "18px 0 24px 0"}}>
      <div style={{width: '100%', backgroundColor: color.gray100, borderRadius: '20px', overflow: 'hidden' }}>
        <div
          style={{
            height: '14px',
            width: `${progress}%`,
            background: `linear-gradient(to bottom right, ${color.lightPrimaryColor} 10%, ${color.primaryColor}) 90%`,
            transition: 'width 1s linear'
          }}
        ></div>
      </div>
    </div>
  );
}

export default Progress