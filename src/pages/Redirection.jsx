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
      let kakao_access_token;
      // console.log(code)
      const authenticateUser = async () => {
        try {
          // 카카오 액세스 토큰을 요청합니다.
          const tokenResponse = await getKakaoAccessToken(`${import.meta.env.VITE_MY_URL}/redirection`, code);
          kakao_access_token = tokenResponse.access_token;
          // 액세스 토큰을 사용하여 로그인 처리
          const loginResponse = await login(1, kakao_access_token);

          if (loginResponse.httpStatusCode == 201) {
            // 로그인 성공 시 홈 페이지로 이동
            navigate("/");
          }
        } catch (error) {
          // console.error(error);
          if (error.response.data.message === "일치하는 정보가 없습니다.") {
            navigate(`/name?kat=${kakao_access_token}`);
          }
        }
      };

      authenticateUser();
    }
  }, [code]);

  return <div>로그인 중...</div>;
};

export default Redirection;
