import { useRecoilState } from "recoil";
import { nowWalkState, walkModalState } from "../../../recoil/walk";

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
              }}
            >
              <img src="/img/button/pause.png" alt="" />
            </button>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: false });
                setWalkModal(true);
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
              }}
            >
              <img src="/img/button/start.png" alt="" />
            </button>
            <button
              onClick={() => {
                setNowWalk({ first: true, now: false });
                setWalkModal(true);
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
          }}
        >
          <img src="/img/button/firstStart.png" alt="" />
        </button>
      )}
    </div>
  );
};

export default StartStop;
