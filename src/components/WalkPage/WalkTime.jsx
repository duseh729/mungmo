import { useRecoilState } from "recoil";
import { walkTimeState } from "../../recoil/walk";
import { color } from "../../constant/style";

const WalkTime = () => {
  const [walkTime, setWalkTime] = useRecoilState(walkTimeState);

  function formatSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", top: "-16px" }}>
      <span className="text36 bold-text">{formatSeconds(walkTime)}</span>
      <span style={{color: color.gray600}}>조금만 더 달려볼까요?</span>
    </div>
  );
};

export default WalkTime;
