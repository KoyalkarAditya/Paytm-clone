import { atom, atomFamily } from "recoil"
export const hasAccount = atom({
  key: "hasAccount",
  default: true,
})
export const usernameAtom = atom({
  key: "usernameAtom",
  default: "",
})
export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
})
export const firstNameAtom = atom({
  key: "firstNameAtom",
  default: "",
})
export const lastNameAtom = atom({
  key: "LastNameAtom",
  default: "",
})
export const isUserAtom = atom({
  key: "isUser",
  default: false,
})
export const tokenAtom = atom({
  key: "tokenAtom",
  default: "",
})
export const balanceAtom = atom({
  key: "balanceAtom",
  default: null,
})
export const filterAtom = atom({
  key: "filterAtom",
  default: " ",
})
export const moneyAtom = atom({
  key: "moneyAtom",
  default: null,
})
