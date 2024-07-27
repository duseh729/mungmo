import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ChatBot from "../pages/ChatBotPage";
import WalkPage from "../pages/WalkPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/" element={<Walk />} /> */}
      <Route path="chat" element={<ChatBot />} />
      <Route path="walk" element={<WalkPage />} />
      <Route path="myPage" element={<MyPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
