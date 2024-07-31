import { useRecoilState } from "recoil";
import { nowWalkState, walkModalState } from "../../../recoil/walk";
import { walk, walkPause } from "../../../apis/api/walk";

const StartStop = () => {
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);
  const [walkModal, setWalkModal] = useRecoilState(walkModalState);

  return (
    <div style={{ textAlign: "center", marginTop: "14px" }}>
      {nowWalk.first ? (
        nowWalk.now ? (
          <>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: false });
                walkPause();
              }}
            >
              <img src="/img/button/pause.png" alt="" />
            </button>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: false });
                setWalkModal(true);
                walkPause();
              }}
            >
              <img src="/img/button/stop.png" alt="" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: true });
                walkPause();
              }}
            >
              <img src="/img/button/start.png" alt="" />
            </button>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: false });
                setWalkModal(true);
                walkPause();
              }}
            >
              <img src="/img/button/stop.png" alt="" />
            </button>
          </>
        )
      ) : (
        <button
          onClick={() => {
            setNowWalk({ first: true, now: true });
            walk();
          }}
        >
          <img src="/img/button/first-start.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default StartStop;
