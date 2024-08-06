import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { color } from "../constant/style";
import { login } from "../apis/api/socialLogin";
import { getAccessToken } from "../apis/tokenManager";

const SignupComplete = () => {
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
        top: 0,
        zIndex: 98,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" }}>
        <div>
          <img src="/img/icons/check-large.png" alt="" style={{ display: "block" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", gap: 52, width: "100%" }}>
          <p className="text24" style={{ color: color.gray900 }}>
            회원가입이 완료되었습니다!
          </p>
          <Button
            onClick={async() => {
              const redirect_uri = `${import.meta.env.VITE_MY_URL}/redirection`;
              window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
                import.meta.env.VITE_KAKAO_KEY
              }&redirect_uri=${redirect_uri}&response_type=code`;
              const token = await getAccessToken();
              login(1, localStorage.getItem(token));
              navigate("/");
            }}
          >
            홈으로 가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupComplete;
