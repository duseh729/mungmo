import { authInstance } from "../utils/instance";

export const fetchCalendarData = ()=>{
  try {
    const {data} = authInstance.get('/walk/calendar');
    console.log(data);
    return data
  } catch (error) {
    throw new Error(error);
  }
}