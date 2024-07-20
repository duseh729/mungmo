import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "../pages/MainPage";
import ChatBot from "../pages/ChatBotPage";
import Walk from "../pages/WalkPage";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="chat" element={<ChatBot />} />
            <Route path="walk" element={<Walk />} />
        </Routes>
    </Router>
);

export default AppRouter;