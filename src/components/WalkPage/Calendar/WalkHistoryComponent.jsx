import { useRecoilState } from "recoil";

import { color } from "../../../constant/style";
import { pickedDateState, walkHistoryState } from "../../../recoil/walk";
import { useEffect, useState } from "react";
import { fetchTodayCalendarData } from "../../../apis/api/calendar";

const WalkHistoryComponent = () => {
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);

  const [todayWalk, setTodayWalk] = useState([]);

  useEffect(() => {
    const getTodayCalendarData = async () => {
      try {               
        // 연도 추출
        const year = pickedDate.getFullYear();
        
        // 월 추출 (0부터 시작하므로 +1 해줘야 함)
        let month = pickedDate.getMonth() + 1;
        
        // 월이 한 자리일 경우 앞에 0을 추가
        month = month < 10 ? '0' + month : month;
        
        // 일 추출
        let day = pickedDate.getDate();
        
        // 일이 한 자리일 경우 앞에 0을 추가
        day = day < 10 ? '0' + day : day;
        
        // "YYYY-MM-DD" 형식으로 조합
        const formattedDate = `${year}-${month}-${day}`;

        const todayCalendarData = await fetchTodayCalendarData(formattedDate);
        // console.log(todayCalendarData);

        setTodayWalk(todayCalendarData.data)
      } catch (error) {
        throw new Error("산책기록 컴포넌트 err: ", error)
      }
    };
    getTodayCalendarData();
  }, [pickedDate]);

  return (
    <div style={{ margin: "12px 0" }}>
      <p style={{ color: color.gray900 }} className="text18 line-spacing2">
        산책 기록
      </p>

      <div style={{ padding: "12px 0", display: "flex", flexDirection: "column", gap: 12, overflow: "auto", maxHeight: "150px" }}>
        {todayWalk.map((data, index)=>{
          return <div key={index}><WalkHistoryItem startTime={data.startTime} endTime={data.endTime} totalTime={data.totalTime} /></div>
        })}
      </div>
    </div>
  );
};

const WalkHistoryItem = ({ startTime, endTime, totalTime }) => {
  // // 시간을 "오후 4시 00분" 형식으로 변환하는 함수
  // const formatTime = time => {
  //   const [hours, minutes, seconds] = time.split(":").map(Number);
  //   const period = hours >= 12 ? "오후" : "오전";
  //   const adjustedHours = hours % 12 || 12; // 0인 경우 12로 변환
  //   return `${period} ${adjustedHours}시 ${minutes.toString().padStart(2, "0")}분`;
  // };

  // // 시간을 "30분 00초" 형식으로 변환하는 함수
  // const formatDuration = (start, end) => {
  //   const [startHours, startMinutes, startSeconds] = start.split(":").map(Number);
  //   const [endHours, endMinutes, endSeconds] = end.split(":").map(Number);

  //   const startDate = new Date();
  //   startDate.setHours(startHours, startMinutes, startSeconds);
  //   const endDate = new Date();
  //   endDate.setHours(endHours, endMinutes, endSeconds);

  //   const durationInSeconds = (endDate - startDate) / 1000;
  //   const minutes = Math.floor(durationInSeconds / 60);
  //   const seconds = durationInSeconds % 60;

  //   return `${minutes}분 ${seconds.toString().padStart(2, "0")}초`;
  // };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px 24px",
        borderRadius: 10,
      }}
    >
      <p style={{ color: color.gray700, marginBottom: 7 }} className="text14 line-spacing2">{`${startTime}~${endTime}`}</p>
      <p style={{ color: color.gray800 }} className="bold-text text18 line-spacing2">
        {totalTime}
      </p>
    </div>
  );
};

export default WalkHistoryComponent;
