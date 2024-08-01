import { useState } from "react";
import { useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.scss";
import moment from "moment/moment";

import { useRecoilState } from "recoil";
import { pickedDateState, walkHistoryState } from "../../../recoil/walk";
import { fetchCalendarData } from "../../../apis/api/calendar";

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [walkAverage, setWalkAverage] = useState(0);

  const [walkHistory, setWalkHistory] = useRecoilState(walkHistoryState);
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);

  function tileClassName({ date, view }) {
    // view가 "month"인 경우에만 특정 날짜에 스타일을 적용합니다.
    if (view === "month" && walkHistory.some(d => d === date.toDateString())) {
      return "walk-tile";
    }
    return null;
  }

  function handleMonth(data) {
    // console.log(data.activeStartDate);
    setPickedDate(new Date(data.activeStartDate));
  }

  useEffect(() => {
    const getCalendarData = async () => {
      try {
        const date = pickedDate;

        // 연도 추출
        const year = date.getFullYear();

        // 월 추출 (0부터 시작하므로 +1 해줘야 함)
        let month = date.getMonth() + 1;

        // 월이 한 자리일 경우 앞에 0을 추가
        month = month < 10 ? "0" + month : month;

        // "YYYY-MM" 형식으로 조합
        const formattedDate = `${year}-${month}`;

        const calendarData = await fetchCalendarData(formattedDate);
        // console.log("페이지 내 데이터", calendarData);

        // for(let i )
        setWalkHistory(calendarData.data.dayList);
        setWalkAverage(calendarData.data.averageWalkTime);
      } catch (error) {
        throw new Error(error);
      }
    };

    if (localStorage.getItem("accessToken")) {
      getCalendarData();
    }
  }, [pickedDate, setPickedDate]);

  return (
    <div>
      <p className="text24 light-text" style={{ textAlign: "center" }}>
        {pickedDate.getFullYear() === new Date().getFullYear() && pickedDate.getMonth() === new Date().getMonth()
          ? "이번 달에는"
          : pickedDate.getFullYear() !== new Date().getFullYear()
          ? `${pickedDate.getFullYear()}년 ${pickedDate.getMonth() + 1}월 달에는`
          : `${pickedDate.getMonth() + 1}월 달에는`}
        <br />
        평균 <span className="bold-text">{walkAverage}</span> 산책했어요!
      </p>

      <div>
        <Calendar
          value={value}
          onChange={setPickedDate}
          calendarType="gregory"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          tileClassName={tileClassName}
          onActiveStartDateChange={handleMonth}
          prev2Label={false}
          next2Label={false}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
