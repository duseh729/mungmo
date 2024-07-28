import { atom } from "recoil";

// 예제용 강아지 정보를 저장할 Atom
export const dogInfoState = atom({
  key: "dogInfoState",
  default: { info: "용맹하고 씩씩한 동네 인싸", 나이: 4, 몸무게: 18, "산책 목표": 40 }
});

export const dogInputState = atom({
  key: "dogInputState",
  default: {}
});
