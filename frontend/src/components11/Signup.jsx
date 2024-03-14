import React from "react"
import { useSetRecoilState, useRecoilState } from "recoil"
import {
  firstNameAtom,
  hasAccount,
  passwordAtom,
  lastNameAtom,
  usernameAtom,
  isUserAtom,
  tokenAtom,
} from "../store/atoms/Atom"

export default function Signup() {
  const setHAsAccount = useSetRecoilState(hasAccount)
  const [username, setUsername] = useRecoilState(usernameAtom)
  const [password, setPassword] = useRecoilState(passwordAtom)
  const [firstName, setFirstName] = useRecoilState(firstNameAtom)
  const [lastName, setLastName] = useRecoilState(lastNameAtom)
  const setIsUser = useSetRecoilState(isUserAtom)
  const setToken = useSetRecoilState(tokenAtom)
  return (
    <div>
      <div className="shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="flex flex-col justify-center items-center p-3 gap-2"
        >
          <input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md "
            type="email"
            placeholder="username"
          />
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="password"
            placeholder="password"
          />
          <div className="flex justify-center">
            <button
              onClick={async () => {
                fetch("http://localhost:3000/api/v1/user/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    username,
                    password,
                    firstName,
                    lastName,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async (res) => {
                  console.log(password)
                  const json = await res.json()
                  const message = json.message
                  if (message == "User Created Successfully") {
                    setToken(json.token)
                    setIsUser(true)
                  } else {
                    alert(message)
                  }
                })
              }}
              className="mt-2 px-10 py-1  bg-green-500  text-xl text-[#fff] font-medium font-serif rounded-md mb-4"
            >
              Create an Account
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            className="mt-2 px-10 py-1  bg-[#1877f2] text-xl text-[#fff] font-medium font-serif rounded-md mb-4"
            onClick={() => {
              setHAsAccount(true)
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
