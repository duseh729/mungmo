import { atom } from "recoil";

export const quitModalState = atom({
  key: "quitModalState",
  default: false,
});

export const logoutModalState = atom({
  key: "logoutModalState",
  default: false,
});
