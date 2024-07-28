import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getKakaoAccessToken, login, signup } from "../apis/api/socialLogin";

const Redirection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const code = query.get("code");

  useEffect(() => {

    if (code) {
      // console.log(code)
      const authenticateUser = async () => {
        try {
          // 카카오 액세스 토큰을 요청합니다.
          const tokenResponse = await getKakaoAccessToken(`${import.meta.env.VITE_MY_URL}/redirection`, code);
          const { access_token } = tokenResponse;
          // console.log(access_token)

          // 액세스 토큰을 사용하여 로그인 처리
          const loginResponse = await login(1, access_token);
          console.log(loginResponse)
          if (loginResponse.httpStatusCode==201) {
            // 로그인 성공 시 홈 페이지로 이동
            navigate("/");
          } else {
            // 회원가입 페이지로 이동하며 액세스 토큰을 쿼리 파라미터로 전달
            navigate(`/name?token=${access_token}`);
          }
        } catch (error) {
          console.error("Authentication error:", error);
        }
      };

      authenticateUser();
    }
  }, [code]);

  return <div>로그인 중...</div>;
};

export default Redirection;
