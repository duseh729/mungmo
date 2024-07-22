import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ChatBot from "../pages/ChatBotPage";
import WalkPage from "../pages/WalkPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/" element={<Walk />} /> */}
      <Route path="chat" element={<ChatBot />} />
      <Route path="walk" element={<WalkPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
