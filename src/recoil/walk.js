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
  default: { first: false, now: false, finish: false },
});

export const walkModalState = atom({
  key: "walkModalState",
  default: false,
});

export const walkHistoryState = atom({
  key: "walkHistoryState",
  default: [
    { date: new Date(2024, 6, 10), walkData: [["16:30:13", "17:00:00"], ["16:30:13", "17:00:00"], ["16:30:13", "17:00:00"], ["16:30:13", "17:00:00"]] }, // 2024년 7월 25일
    { date: new Date(2024, 5, 15), walkData: [["16:30:00", "17:00:00"]] }, // 2024년 6월 15일
  ],
});

export const pickedDateState = atom({
  key: "pickDateState",
  default: new Date(),
});
