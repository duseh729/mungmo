import axios from "axios";
import { authInstance, baseInstance } from "../utils/instance";

export const postChat = async message => {
  try {
    const { data } = await baseInstance.post("/chat", { message: message });
    // console.log("api 내부 data", data);
    return data;
  } catch (error) {
    console.error("postChat error: ", error);
  }
};

export const isLoginPostChat = async (message, chatRoomSeq=null) => {
  try {
    // console.log(message);
    const { data } = await authInstance.post("/chat", {chatRoomSeq: chatRoomSeq, message: message });
    // console.log("api 내부 data", data);
    return data;
  } catch (error) {
    console.error("postChat error: ", error);
  }
};

export const isOpenChat = async () => {
  try {
    console.log("isOpenChat 호출됨");
    // console.log(import.meta.env.VITE_API_URL)
    const { data } = await authInstance.get("/chat/chatRoom/open");
    // const { data } = await axios.get("http://223.130.157.149/api/v1/chat/chatRoom/open");
    console.log("isOpenChat 데이터 수신:", data);
    return data;
  } catch (error) {
    throw new Error("isOpenChat: ", error);
  }
};
