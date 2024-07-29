import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ToLoginComponent = ({ children }) => {
  const navigate = useNavigate();

  return (
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
        top:0,
        zIndex: 98,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", gap: 52, width: '100%' }}>
        <p className="text24">{children}</p>
        <Button onClick={()=>{navigate('/login')}}>로그인하러 가기</Button>
      </div>
    </div>
  );
};

export default ToLoginComponent;
