import { atom } from "recoil";

export const dogNameState = atom({
  key: "dogNameState",
  default: "보리보리쌀",
});

export const dogInfoState = atom({
  key: "dogInfoState",
  default: { info: "용맹하고 씩씩한 동네 인싸", 나이: 4, 몸무게: 18, "산책 목표": 40 }
})