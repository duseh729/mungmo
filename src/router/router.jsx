import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ChatBot from "../pages/ChatBotPage";
import WalkPage from "../pages/WalkPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";

import UpdateName from "../pages/UpdateDog/UpdateName";
import UpdateBreed from "../pages/UpdateDog/UpdateBreed";
import UpdateWeight from "../pages/UpdateDog/UpdateWeight";
import UpdateBirth from "../pages/UpdateDog/UpdateBrith";
import UpdateEtc from "../pages/UpdateDog/UpdateEtc";
import ProfileUpdate from "../pages/ProfileUpdate";
import Redirection from "../pages/Redirection";
import SignupComplete from "../pages/SignupComplete";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/" element={<Walk />} /> */}
      <Route path="chat" element={<ChatBot />} />
      <Route path="walk" element={<WalkPage />} />
      <Route path="myPage" element={<MyPage />} />
      <Route path="login" element={<LoginPage />} />

      <Route path="name" element={<UpdateName />} />
      <Route path="breed" element={<UpdateBreed />} />
      <Route path="weight" element={<UpdateWeight />} />
      <Route path="birth" element={<UpdateBirth />} />
      <Route path="etc" element={<UpdateEtc />} />
      <Route path="signup-complete" element={<SignupComplete />}></Route>

      <Route path="redirection" element={<Redirection />} />

      <Route path="profile-update" element={<ProfileUpdate />} />
    </Routes>
  </Router>
);

export default AppRouter;
