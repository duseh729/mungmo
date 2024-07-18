import { useRecoilState } from "recoil";
import { indexState } from "../recoil/temp";

const Home = () => {
  const [temp, setTemp] = useRecoilState(indexState);

  return (
    <>
      <p>안녕하세요</p>
      <p>{temp}</p>
    </>
  );
};

export default Home;
