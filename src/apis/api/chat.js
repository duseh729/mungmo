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

export const isOpenChat = async () => {
  try {
    const { data } = await authInstance.post("/chat/chatRoom/open");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("isOpenChat: ", error);
  }
};
