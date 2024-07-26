import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { isLoginState } from "../../recoil/user";
import { chatModalState } from "../../recoil/chat";

import Button from "../common/Button";
import ToLoginComponent from "../common/ToLoginComponent";
import { useState } from "react";
import { color } from "../../constant/style";

const ChatBotModal = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [chatModal, setChatModal] = useRecoilState(chatModalState);

  const [tempChatData, setTempChatDate] = useState([
    { title: "혈뇨", contents: [["무엇을 도와줄까", "그건 나도 모름"], ["강아지가 혈뇨를 누어"]] },
    { title: "혈뇨", contents: [["무엇을 도와줄까", "그건 나도 모름"], ["강아지가 혈뇨를 누어"]] },
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
          position: "fixed",
          width: 375,
          top: 0,
          zIndex: 99,
        }}
      >
        <span>AI 댕댕닥터와의 대화 기록</span>

        <button
          onClick={() => {
            setChatModal(false);
          }}
          style={{ position: "absolute", right: 12, top: 6, cursor: "pointer" }}
        >
          <img src="/img/icons/close.png" alt="" />
        </button>
      </div>

      {isLogin ? (
        <div
          style={{
            height: "100vh",
            width: "375px",
            backgroundColor: "white",
            padding: "44px 0 12px 0",
            position: "fixed",
            zIndex: 98,
          }}
        >
          <div style={{ padding: "12px 16px", backgroundColor: color.gray100, textAlign: "center" }}>
            <span style={{ color: color.gray600 }} className="text12">
              최근 대화 10건을 보여드려요
            </span>
          </div>

          <div style={{marginTop:12, padding: "12px 16px", display: "flex", gap: 8, flexDirection: "column" }}>
            {tempChatData.map((item, index) => (
              <ChatHistoryItem key={index} title={item.title} />
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            width: "375px",
            backgroundColor: "white",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            zIndex: 98,
          }}
        >
          <ToLoginComponent>
            <span className="bold-text">간편 로그인</span>하고
            <br />
            이전 대화 기록을 이용해 보세요!
          </ToLoginComponent>
        </div>
      )}
    </>
  );
};

const ChatHistoryItem = ({ title, onClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: color.gray100, padding: 16, borderRadius: 10 }}>
      <span style={{ color: color.gray800 }} className="text16 bold-text">{title}</span>
      <button onClick={onClick}>
        <img style={{ display: "block" }} src="/img/icons/right-arrow.png" alt="" />
      </button>
    </div>
  );
};

export default ChatBotModal;
