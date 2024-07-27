import axios from "axios";

// baseAPI 함수
const baseAPI = (url, options) => {
  return axios.create({ baseURL: url, ...options });
};

// authAPI 함수
const authAPI = (url, options) => {
  const token = localStorage.getItem("jwt_token"); // 또는 다른 방식으로 토큰을 가져옵니다.
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};

// 인스턴스 생성
// export const baseInstance = baseAPI(process.env.REACT_APP_API_URL);
export const baseInstance = baseAPI(import.meta.env.VITE_API_URL);
export const authInstance = authAPI(import.meta.env.VITE_API_URL);
