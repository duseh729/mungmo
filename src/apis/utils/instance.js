import axios from "axios";

// baseAPI 함수: 기본 Axios 인스턴스 생성
const baseAPI = (url, options = {}) => {
  return axios.create({ baseURL: url, ...options });
};

// authAPI 함수: 인증이 필요한 Axios 인스턴스 생성
const authAPI = (url, options = {}) => {
  const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 accessToken을 가져옵니다.
  // console.log(token)
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
    ...options,
  });
};

const API_URL = "https://223.130.157.149/api/v1";

// 인스턴스 생성
export const baseInstance = baseAPI(API_URL);
export const authInstance = authAPI(API_URL);
