import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import Answer from "../components/ChatBotPage/Answer";
import Question from "../components/ChatBotPage/Question";
import ChatBotModal from "../components/ChatBotPage/ChatBotModal";

import { color } from "../constant/style";

import { useRecoilState } from "recoil";
import { chatModalState } from "../recoil/chat";

const ChatBot = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState(["무엇을 도와줄까"]);
  const [question, setQuestion] = useState([]);

  const messageEndRef = useRef(null);

  const [chatModal, setChatModal] = useRecoilState(chatModalState);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [answer]);

  const handleSendMessage = () => {
    // console.log(message);
    if (message.trim() !== "") {
      setQuestion([...question, message]);
      setAnswer([...answer, "대답 템플릿"]); // 실제 답변 로직으로 교체하세요
      setMessage("");
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {chatModal && <ChatBotModal></ChatBotModal>}
      <Header
        onClick={() => {
          navigate(-1);
        }}
        hamburgerClick={() => {setChatModal(true)}}
      >
        AI 댕댕닥터와의 대화
      </Header>

      <div style={{ backgroundColor: color.gray100, padding: 12 }}>
        <p style={{ color: color.gray600, textAlign: "center" }} className="text12">
          AI 댕댕닥터와의 대화는 참고용으로만 사용해주세요.
          <br />
          자세한 진단은 전문가와 상담해주세요.
        </p>
      </div>

      <div className="container">
        {answer.map((item, index) => {
          return (
            <div key={index}>
              <Answer>{item}</Answer>
              {index < question.length ? <Question>{question[index]}</Question> : null}
            </div>
          );
        })}
      </div>

      <div ref={messageEndRef} style={{ height: 84 }}></div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: 375,
          backgroundColor: "white",
          padding: "12px 16px",
          display: "flex",
          gap: 4,
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{ height: 52, width: "100%", border: `1px solid ${color.gray300}`, borderRadius: 25, backgroundColor: color.gray100, padding: "12px 16px" }}
          placeholder="궁금한 점을 물어보세요!"
          onChange={(e)=>{setMessage(e.target.value)}}
          value={message}
          onKeyUp={(e)=>{
            if(e.key=="Enter"){
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={handleSendMessage}
        >
          <img src="/img/button/send-message.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
