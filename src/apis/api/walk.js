import { authInstance } from "../utils/instance";

/**
 * 당일 산책 정보 출력함수 (산책회차, 시간)
 * @returns 
 */
export const fetchTodayWalkData = async () => {
  try {
    const { data } = await authInstance.get("/walk/today");
    return data;
  } catch (error) {
    throw new Error("당일 날짜 불러오기 에러: ", error);
  }
};

/**
 * 산책 시작/종료 함수(toggle처럼 사용)
 * @returns
 */
export const walk = async () => {
  try {
    const { data } = await authInstance.post("/walk");
    return data;
  } catch (error) {
    throw new Error("산책 시작/종료 에러: ", error);
  }
};

/**
 * 산책 일시정지/시작 함수(toggle처럼 사용)
 * @returns
 */
export const walkPause = async () => {
  try {
    const { data } = await authInstance.post("/walk/pause");
    return data;
  } catch (error) {
    throw new Error("산책 일시정지/시작 에러: ", error);
  }
};
