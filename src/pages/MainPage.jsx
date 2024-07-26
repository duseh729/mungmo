import { useState } from "react";
import { useRecoilState } from "recoil";

import MainHeader from "../components/MainPage/MainHeader";
import LoginProfile from "../components/MainPage/LoginProfile";
import DefaultProfile from "../components/MainPage/DefaultProfile";
import Menu from "../components/MainPage/Menu";

import { dogInfoState, dogNameState } from "../recoil/dog";
import { isLoginState } from "../recoil/user";

const Main = () => {
  const [userName, setUserName] = useRecoilState(dogNameState);
  const [profileContents, setProfileContents] = useRecoilState(dogInfoState);
  const [dogType, setDogType] = useState("웰시코기");

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  return (
    <div className="container">
      <MainHeader />
      {isLogin ? <LoginProfile userName={userName} dogType={dogType} profileContents={profileContents} /> : <DefaultProfile />}
      <Menu />
    </div>
  );
};

export default Main;
