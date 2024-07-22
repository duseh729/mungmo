import { useState } from "react";

import Header from "../components/MainPage/Header";
import LoginProfile from "../components/MainPage/LoginProfile";
import DefaultProfile from "../components/MainPage/DefaultProfile";
import Menu from "../components/MainPage/Menu";

const Main = () => {
  const [userName, setUserName] = useState("보리보리");
  const [dogType, setDogType] = useState("웰시코기");
  const [profileContents, setProfileContents] = useState({ info: "용맹하고 씩씩한 동네 인싸", 나이: 4, 몸무게: 18, "산책 목표": 40 });

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <Header />
      {isLogin ? <LoginProfile userName={userName} dogType={dogType} profileContents={profileContents} /> : <DefaultProfile />}
      <Menu />
    </div>
  );
};

export default Main;
