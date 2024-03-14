import React from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"
import {
  hasAccount,
  isUserAtom,
  passwordAtom,
  tokenAtom,
  usernameAtom,
} from "../store/atoms/Atom"

export default function Signin() {
  const setHasAccount = useSetRecoilState(hasAccount)
  const setUsername = useSetRecoilState(usernameAtom)
  const setPassword = useSetRecoilState(passwordAtom)
  const username = useRecoilValue(usernameAtom)
  const password = useRecoilValue(passwordAtom)
  const setISUser = useSetRecoilState(isUserAtom)
  const setToken = useSetRecoilState(tokenAtom)

  return (
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
            setPassword(e.target.value)
          }}
          className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
          type="password"
          placeholder="password"
        />
        <button
          onClick={async () => {
            fetch("http://localhost:3000/api/v1/user/signin", {
              method: "POST",
              body: JSON.stringify({
                username,
                password,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async (res) => {
              const json = await res.json()
              const message = json.message
              if (message == "Login successful") {
                setToken(json.token)
                setISUser(true)
              } else {
                alert(message)
              }
            })
          }}
          className=" px-28 py-1 bg-[#1877f2]  text-xl text-[#fff] font-medium font-serif rounded-md"
        >
          Log in
        </button>
      </form>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setHasAccount(false)
          }}
          className="mt-2 px-10 py-1  bg-green-500  text-xl text-[#fff] font-medium font-serif rounded-md mb-4"
        >
          Create an Account
        </button>
      </div>
    </div>
  )
}
