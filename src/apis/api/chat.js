import { baseInstance } from "../utils/instance";

export const postChat = async (message)=>{
  try{
    const {data} = await baseInstance.post('/chat', {chatRoomSeq: 0, message: message})
    // console.log("api 내부 data", data);
    return data
  }catch(error){
    console.error("postChat error: ", error)
  }
}