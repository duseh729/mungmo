import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import MainHeader from "../components/MainPage/MainHeader";
import LoginProfile from "../components/MainPage/LoginProfile";
import DefaultProfile from "../components/MainPage/DefaultProfile";
import Menu from "../components/MainPage/Menu";

import { dogInfoState, dogInputState } from "../recoil/dog";
import { isLoginState } from "../recoil/user";
import { fetchUserData } from "../apis/api/user";
import { fetchTodayWalkData } from "../apis/api/walk";
import { todayWalkState } from "../recoil/walk";
import { isOpenChat } from "../apis/api/chat";

const Main = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);
  const [todayWalk, setTodayWalk] = useRecoilState(todayWalkState);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        // console.log(userData)
        // console.log(localStorage.getItem("accessToken"));
        if (userData.httpStatusCode === 200) {
          setDogInfo({ ...userData.data.pet });
          setIsLogin(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        // 추가적인 에러 처리 로직을 여기에 추가할 수 있습니다.
      }
    };
    const getTodayWalkData = async () => {
      try {
        const todayWalkData = await fetchTodayWalkData();
        // console.log(todayWalkData);
        const [minutes, seconds] = todayWalkData.data["todayWalkTime"].split(":").map(Number);
        setTodayWalk({ todayWalkTime: minutes * 60 + seconds, round: todayWalkData.data.round });
      } catch (error) {
        throw new Error(error);
      }
    };
    const getIsOpenChat = async ()=>{
      try {
        const isOpenChatResponse = await isOpenChat();
        // console.log()
      } catch (error) {
        throw new Error("getIsOpenChat: ", error);
      }
    }

    if (localStorage.getItem("accessToken")) {
      getUserData();
      getTodayWalkData();
      // getIsOpenChat();
    }
  }, [setDogInfo, setIsLogin, isLogin]);

  return (
    <>
      <MainHeader />
      <div className="container">
        {isLogin ? <LoginProfile userName={dogInfo.name} dogType={dogInfo.breed} profileContents={dogInfo} /> : <DefaultProfile />}
        <Menu isLogin={isLogin} />
      </div>
    </>
  );
};

export default Main;
