import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";

import { color } from "../constant/style";

const ChatBot = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        onClick={() => {
          navigate(-1);
        }}
        hamburgerClick={() => {}}
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
        
      </div>
    </>
  );
};

export default ChatBot;
