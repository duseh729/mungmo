import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const social = ["kakao", "naver"];

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 100,
        padding: "12px 16px",
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ position: "absolute", top: 12, right: 16, padding: 0, cursor: "pointer" }}
      >
        <img style={{ display: "block" }} src="/img/icons/close.png" alt="" />
      </button>

      <img src="/img/logos/logo-large.png" alt="" />

      <div style={{ textAlign: "center" }}>
        {social.map(item => (
          <button
            key={item}
            onClick={() => {
              const redirect_uri = `${import.meta.env.VITE_MY_URL}/redirection`;
              if (item == "kakao") {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
                  import.meta.env.VITE_KAKAO_KEY
                }&redirect_uri=${redirect_uri}&response_type=code`;
              } else if (item == "naver") {
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
                  import.meta.env.VITE_NAVER_KEY
                }&state=test&redirect_uri=${redirect_uri}`;
              }
            }}
          >
            <img style={{ display: "block" }} src={`/img/loginButton/${item}.png`} alt={item} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
