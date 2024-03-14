import React from "react"
import { useSetRecoilState } from "recoil"
import { hasAccount } from "../store/atoms/Atom"

export default function Signin() {
  const setHasAccount = useSetRecoilState(hasAccount)
  return (
    <div className="shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="flex flex-col justify-center items-center p-3 gap-2"
      >
        <input
          className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md "
          type="text"
          placeholder="username"
        />
        <input
          className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
          type="text"
          placeholder="password"
        />
        <button className=" px-28 py-1 bg-[#1877f2]  text-xl text-[#fff] font-medium font-serif rounded-md">
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
