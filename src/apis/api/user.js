import { authInstance } from "../utils/instance";

/**
 * 사용자 데이터 요청 함수
 * @returns
 */
export const fetchUserData = async () => {
  const token = localStorage.getItem("accessToken");
  // console.log(token);
  if (!token) {
    // console.error('No access token found');
    throw new Error("No access token found");
  }

  try {
    const { data } = await authInstance.get("/user");
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error.response ? error.response.data : error);
    throw error;
  }
};

/**
 * 펫 정보 수정하는 함수
 * @param {string} name 강아지 이름
 * @param {string} breed 견종
 * @param {int} weight 무게
 * @param {int} birth 생년
 * @param {string} etc 특이사항(병력 등)
 * @param {int} walkingGoal 산책 목표
 * @returns
 */
export const updatePet = async (seq, name, breed, weight, birth, etc, walkingGoal) => {
  console.log(seq, name, breed, weight, birth, etc, walkingGoal);
  const token = localStorage.getItem("accessToken");
  // console.log(token);
  if (!token) {
    // console.error('No access token found');
    throw new Error("No access token found, updatePet");
  }

  // console.log(name, breed, weight, birth, etc, walkingGoal);

  try {
    const { data } = await authInstance.patch("user/pet", { petSeq: seq, name, breed, weight, birth, etc, walkingGoal });
    return data;
  } catch (error) {
    console.error("Failed to fetch user data:", error.response ? error.response.data : error);
    throw error;
  }
};
