import { authInstance } from "../utils/instance";

// 사용자 데이터 요청 함수
export const fetchUserData = async () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    console.error('No access token found');
    throw new Error('No access token found');
  }

  try {
    const { data } = await authInstance.get('/user');
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error.response ? error.response.data : error);
    throw error;
  }
};