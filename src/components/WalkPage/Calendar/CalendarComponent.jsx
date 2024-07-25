import { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import "./custom-calendar.scss"
import moment from "moment/moment";

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const specificDates = [
    new Date(2024, 6, 10), // 2024년 7월 25일
    new Date(2024, 5, 15)  // 2024년 6월 15일
  ];

  const tileClassName = ({ date, view }) => {
    // view가 "month"인 경우에만 특정 날짜에 스타일을 적용합니다.
    if (view === "month" && specificDates.some(d => d.toDateString() === date.toDateString())) {
      return 'walk-tile';
    }
    return null;
  };

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
