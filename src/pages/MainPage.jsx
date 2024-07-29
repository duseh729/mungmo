import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import MainHeader from "../components/MainPage/MainHeader";
import LoginProfile from "../components/MainPage/LoginProfile";
import DefaultProfile from "../components/MainPage/DefaultProfile";
import Menu from "../components/MainPage/Menu";

import { dogInfoState, dogInputState } from "../recoil/dog";
import { isLoginState } from "../recoil/user";
import { fetchUserData } from "../apis/api/user";

const Main = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [dogInfo, setDogInfo] = useRecoilState(dogInfoState);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        // console.log(userData)
        if (userData.httpStatusCode === 200) {
          setDogInfo({ info: "용맹하고 씩씩한 동네 인싸", ...userData.data.pet });
          setIsLogin(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // 추가적인 에러 처리 로직을 여기에 추가할 수 있습니다.
      }
    };

    if(localStorage.getItem('accessToken')){
      getUserData();
    }
  }, [setDogInfo, setIsLogin]);

  return (
    <div className="container">
      <MainHeader />
      {isLogin ? <LoginProfile userName={dogInfo.name} dogType={dogInfo.breed} profileContents={dogInfo} /> : <DefaultProfile />}
      <Menu />
    </div>
  );
};

export default Main;
