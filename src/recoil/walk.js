import { atom, selector } from "recoil";
import { dogInfoState } from "./dog";

export const walkTimeState = atom({
  key: "walkTimeState",
  default: 0,
});

export const totalSecondState = selector({
  key: "totalSecondState",
  get: ({ get }) => {
    const dogInfo = get(dogInfoState);
    const totalSecond = dogInfo["산책 목표"] * 60;
    return totalSecond;
  },
});

export const nowWalkState = atom({
  key: "nowWalkState",
  default: false
})