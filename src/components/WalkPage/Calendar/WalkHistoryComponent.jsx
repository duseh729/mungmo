import { useRecoilState } from "recoil";

import { color } from "../../../constant/style";
import { pickedDateState, walkHistoryState } from "../../../recoil/walk";

const WalkHistoryComponent = () => {
  const [walkHistory, setWalkHistory] = useRecoilState(walkHistoryState);
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);

  return (
    <div style={{ margin: "12px 0" }}>
      <p style={{ color: color.gray900 }} className="text18 line-spacing2">
        산책 기록
      </p>

      <div style={{ padding: "12px 0", display: "flex", flexDirection:'column',gap: 12, overflow: 'auto', maxHeight: "300px" }}>
        {walkHistory
          .find(
            (historyItem) => historyItem.date.getTime() == pickedDate.getTime()
          )
          ?.walkData.map((item, index) => {
            return (
              <div key={index}>
                <WalkHistoryItem startTime={item[0]} endTime={item[1]} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const WalkHistoryItem = ({ startTime, endTime }) => {
  // 시간을 "오후 4시 00분" 형식으로 변환하는 함수
  const formatTime = (time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const period = hours >= 12 ? "오후" : "오전";
    const adjustedHours = hours % 12 || 12; // 0인 경우 12로 변환
    return `${period} ${adjustedHours}시 ${minutes
      .toString()
      .padStart(2, "0")}분`;
  };

  // 시간을 "30분 00초" 형식으로 변환하는 함수
  const formatDuration = (start, end) => {
    const [startHours, startMinutes, startSeconds] = start
      .split(":")
      .map(Number);
    const [endHours, endMinutes, endSeconds] = end.split(":").map(Number);

    const startDate = new Date();
    startDate.setHours(startHours, startMinutes, startSeconds);
    const endDate = new Date();
    endDate.setHours(endHours, endMinutes, endSeconds);

    const durationInSeconds = (endDate - startDate) / 1000;
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;

    return `${minutes}분 ${seconds.toString().padStart(2, "0")}초`;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px 24px",
        borderRadius: 10,
      }}
    >
      <p
        style={{ color: color.gray700, marginBottom: 7 }}
        className="text14 line-spacing2"
      >{`${formatTime(startTime)}~${formatTime(endTime)}`}</p>
      <p
        style={{ color: color.gray800 }}
        className="bold-text text18 line-spacing2"
      >
        {formatDuration(startTime, endTime)}
      </p>
    </div>
  );
};

export default WalkHistoryComponent;
