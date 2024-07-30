import { authInstance } from "../utils/instance";

// 사용자 데이터 요청 함수
export const fetchUserData = async () => {
  const token = localStorage.getItem('accessToken');
// console.log(token);
  if (!token) {
    // console.error('No access token found');
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

// 펫 정보 수정하는 함수
export const updatePet = async ({name, breed, weight, birth, etc, walkingGoal})=>{
  const token = localStorage.getItem('accessToken');
// console.log(token);
  if (!token) {
    // console.error('No access token found');
    throw new Error('No access token found, updatePet');
  }

  try {
    const { data } = await authInstance.patch('user/pet', {petSeq:9, name, breed, weight, birth, etc, walkingGoal} );
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error.response ? error.response.data : error);
    throw error;
  }
}