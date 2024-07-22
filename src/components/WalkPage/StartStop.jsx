import { useRecoilState } from "recoil";
import { nowWalkState } from "../../recoil/walk";

const StartStop = () => {
  const [nowWalk, setNowWalk] = useRecoilState(nowWalkState);

  return (
    <div style={{textAlign: 'center', marginTop: "14px"}}>
      {nowWalk ? (
        <button
          onClick={() => {
            setNowWalk(false);
          }}
        >
          <img src="/img/button/pause.png" alt="" />
        </button>
      ) : (
        <button
          onClick={() => {
            setNowWalk(true);
          }}
        >
          <img src="/img/button/start.png" alt="" />
        </button>
      )}
      <button>
        <img src="/img/button/stop.png" alt="" />
      </button>
    </div>
  );
};

export default StartStop;
