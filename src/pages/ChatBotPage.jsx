import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"; // 최신 버전 import
import { useRecoilState } from "recoil";

import Header from "../components/common/Header";
import Answer from "../components/ChatBotPage/Answer";
import Question from "../components/ChatBotPage/Question";
import ChatBotModal from "../components/ChatBotPage/ChatBotModal";
import LoadingAnswer from "../components/ChatBotPage/LoadingAnswer";

import { color } from "../constant/style";
import { chatModalState } from "../recoil/chat";
import { postChat } from "../apis/api/chat";

const ChatBot = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState([
    "어떤 문제가 있으신가요?\n궁금하신 점을 물어봐 주세요!\n질문에 이런 점들이 들어가면더 자세한 답변을 드릴 수 있어요:)\n(견종, 나이, 무게, 질환 등)",
  ]);
  const [question, setQuestion] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState(""); // 로딩 메시지 상태

  const messageEndRef = useRef(null);

  const [chatModal, setChatModal] = useRecoilState(chatModalState);

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: postChat,
    onMutate: () => {
      // 요청 시작 시 로딩 메시지 설정
      setLoadingMessage("대답을 기다리는 중...");
    },
    onSuccess: data => {
      // console.log(data.data.answer);
      setAnswer(prevAnswers => [...prevAnswers, data.data.answer]);
      setLoadingMessage(""); // 성공 시 로딩 메시지 제거
    },
    onError: error => {
      console.error("Error posting message:", error);
      setLoadingMessage(""); // 에러 발생 시 로딩 메시지 제거
    },
  });

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setQuestion(prevQuestions => [...prevQuestions, message]);
      mutate(message);
      setMessage("");
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [answer, isPending]);

  return (
    <div style={{ position: "relative", maxHeight: "100vh", overflow: "auto" }}>
      {chatModal && <ChatBotModal />}
      <Header onClick={() => navigate(-1)} hamburgerClick={() => setChatModal(true)}>
        AI 댕댕닥터와의 대화
      </Header>

      <div className="container" style={{ minHeight: 0 }}>
        <div style={{ backgroundColor: color.gray100, padding: 12 }}>
          <p style={{ color: color.gray600, textAlign: "center" }} className="text12">
            AI 댕댕닥터와의 대화는 참고용으로만 사용해주세요.
            <br />
            자세한 진단은 전문가와 상담해주세요.
          </p>
        </div>

        <div style={{ paddingBottom: 76 }}>
          {answer.map((item, index) => (
            <div key={index}>
              <Answer>{item}</Answer>
              {index < question.length ? <Question>{question[index]}</Question> : null}
            </div>
          ))}
          {isPending && <LoadingAnswer />}
        </div>
      </div>

      <div ref={messageEndRef}></div>

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
          onChange={e => setMessage(e.target.value)}
          value={message}
          onKeyUp={e => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage} style={{ padding: 0, cursor: "pointer" }}>
          <img style={{ display: "flex" }} src="/img/button/send-message.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
