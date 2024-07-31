import { useRecoilState } from "recoil";
import { dogInfoState } from "../../../recoil/dog";
import { color } from "../../../constant/style";
import { todayWalkState } from "../../../recoil/walk";

const WalkState = () => {
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);
  const [todayWalk, setTodayWalk] = useRecoilState(todayWalkState)
  const walkStateItem = [
    { text: "산책 목표", state: dogInfo["walkingGoal"] },
    { text: "산책 횟수", state: todayWalk.round },
  ];

  return (
    <div style={{ display: "flex" }}>
      {walkStateItem.map((item, i) => {
        return (
          <div
            key={item.text}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: i == 0 && `solid 1px ${color.gray500}`,
            }}
          >
            <span className="text18 bold-text" style={{ color: color.gray900 }}>
              {i === 0 && (item.state === null || item.state <= 0) ? "-" : typeof item.state == "string" ? item.state : `${item.state}분`}
            </span>
            <span className="text14" style={{ marginTop: "4px", color: color.gray500 }}>
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default WalkState;
