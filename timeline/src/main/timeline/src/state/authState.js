import { atom } from "recoil";

export const authState = atom({
  key: "authState", // 유니크한 키 값
  default: false, // 기본값 (로그인되지 않은 상태)
});
