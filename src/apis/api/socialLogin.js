import axios from "axios";
import { authInstance, baseInstance } from "../utils/instance";
import { clearTokens, setTokens } from "../tokenManager";
import { useNavigate } from "react-router-dom";

export const getKakaoAccessToken = async (redirectUri, code) => {
  // console.log(redirectUri)
  const url = 'https://kauth.kakao.com/oauth/token';
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: import.meta.env.VITE_KAKAO_KEY, // 클라이언트 ID 확인
    redirect_uri: redirectUri, // 리디렉션 URI 확인
    code: code, // 인가 코드 확인
  });

  try {
    const { data } = await axios.post(url, body, { headers });
    return data;
  } catch (error) {
    console.error('Failed to fetch the token:', error.response ? error.response.data : error);
    throw error;
  }
};

export const login = async (type, token) => {
  try {
    const { data } = await baseInstance.post('/auth/login', { socialLoginType: type, token: token });
    // console.log(data.data)
    setTokens(data.data.accessToken, data.data.refreshToken); // 토큰 저장
    return data;
  } catch (error) {
    // console.error('kakao login error: ', error.response ? error.response.data : error);
    // console.error(error.response.data.message); 
    throw error;
  }
};

export const signup = async (token, type, petData) => {
  try {
    const { data } = await baseInstance.post('/user', { socialLoginType: type, token: token, pet: petData });
    // setTokens(data.data.accessToken, data.data.refreshToken); // 토큰 저장
    return data;
  } catch (error) {
    console.error('kakao signup error: ', error.response ? error.response.data.message : error);
    throw error;
  }
};

export const resign = async ()=>{
  try {
    const res = await authInstance.delete('/user');
    clearTokens();
  } catch (error) {
    console.error("resign error: ", error);
    throw error;
  }
}
