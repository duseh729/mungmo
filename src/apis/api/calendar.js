import { authInstance } from "../utils/instance";

/**
 * 
 * @param {string} yearAndMonth 2024-07 형식의 스트링값
 * @returns 
 */
export const fetchCalendarData = async (yearAndMonth)=>{
  try {
    // console.log(yearAndMonth)
    // console.log(localStorage.getItem('accessToken'))
    const {data} = await authInstance.get(`/walk/calendar?yearAndMonth=${yearAndMonth}`);
    // const {data} = await authInstance.get(`/walk/calendar?yearAndMonth=2024-08`);
    // console.log(data);
    return data
  } catch (error) {
    throw new Error("fetchCalendarData err: ", error);
  }
}

export const fetchTodayCalendarData = async(yearMonthDate)=>{
  try {
    // console.log(yearMonthDate)
    const {data} = await authInstance.get(`/walk/detail?date=${yearMonthDate}`)
    // console.log(data);
    return data
  } catch (error) {
    throw new Error("fetchTodayCalendarData: ", error)
  }
}