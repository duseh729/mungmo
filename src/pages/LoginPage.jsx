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
      <button onClick={()=>{navigate('/')}} style={{position:'absolute', top:12, right:16, padding: 0, cursor: 'pointer'}}>
        <img style={{display: 'block'}} src="/img/icons/close.png" alt="" />
      </button>

      <img src="/img/logos/logo-large.png" alt="" />

      <div style={{ textAlign: "center" }}>
        {social.map(item => (
          <button >
            <img style={{ display: "block" }} src={`/img/loginButton/${item}.png`} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;