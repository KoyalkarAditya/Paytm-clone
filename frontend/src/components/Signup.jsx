import React from "react"
import { useSetRecoilState } from "recoil"
import { hasAccount } from "../store/atoms/Atom"

export default function Signup() {
  const setHAsAccount = useSetRecoilState(hasAccount)
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
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md "
            type="text"
            placeholder="username"
          />
          <input
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="text"
            placeholder="First Name"
          />
          <input
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="text"
            placeholder="Last Name"
          />
          <input
            className=" border-2 border-gray-400 text-xl text-start px-7 py-1 font-thin font-serif text-gray-500 rounded-md"
            type="text"
            placeholder="password"
          />
          <div className="flex justify-center">
            <button className="mt-2 px-10 py-1  bg-green-500  text-xl text-[#fff] font-medium font-serif rounded-md mb-4">
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
