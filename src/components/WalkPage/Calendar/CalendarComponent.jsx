import { useState } from "react";
import { useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.scss";
import moment from "moment/moment";

import { useRecoilState } from "recoil";
import { pickedDateState, walkHistoryState } from "../../../recoil/walk";

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const [specificDates, setSpecificDates] = useRecoilState(walkHistoryState);
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);

  const tileClassName = ({ date, view }) => {
    // view가 "month"인 경우에만 특정 날짜에 스타일을 적용합니다.
    if (
      view === "month" &&
      specificDates.some((d) => d.date.toDateString() === date.toDateString())
    ) {
      return "walk-tile";
    }
    return null;
  };

  useEffect(()=>{
    // console.log(pickedDate);
  }, [pickedDate])

  return (
    <div>
      <p className="text24 light-text" style={{ textAlign: "center" }}>
        이번 달에는
        <br />
        평균 <span className="bold-text">35분</span> 산책했어요!
      </p>

      <div>
        <Calendar
          value={value}
          onChange={setPickedDate}
          calendarType="gregory"
          formatDay={(locale, date) => moment(date).format("D")}
          showNeighboringMonth={false}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
