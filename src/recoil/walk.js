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
    let totalSecond;
    if (dogInfo["walkingGoal"] != null) {
      totalSecond = dogInfo["walkingGoal"] * 60;
    } else {
      totalSecond = 60;
    }
    return totalSecond;
  },
});

export const todayWalkState = atom({
  key: "todayWalkState",
  default: { todayWalkTime: 0, round: "" },
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
  default: [new Date(2024, 6, 10), new Date(2024, 5, 15)],
});

export const pickedDateState = atom({
  key: "pickDateState",
  default: new Date(),
});