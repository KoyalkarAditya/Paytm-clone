import React from "react"
import { tokenAtom } from "../store/atoms/Atom"
import { useRecoilValue } from "recoil"
export default function CheckBalance() {
  const token = useRecoilValue(tokenAtom)
  return (
    <div className="flex justify-center gap-10">
      <div className="flex justify-center h-1/2 mt-0.5">
        <img src="..//bank.png" alt="" />
      </div>
      <button
        onClick={async () => {
          fetch("http://localhost:3000/api/v1/account/balances", {
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
            "Content-type": "application/json",
          }).then(async (res) => {
            const json = await res.json()
            const balance = json.balance.toFixed(2)
            alert("Your Balance is :" + balance)
          })
        }}
        className="mt-2 px-10 py-1  bg-[#1877f2] text-xl text-[#fff] font-medium font-serif rounded-md mb-4"
      >
        Check balance
      </button>
      <button
        onClick={async () => {}}
        className="mt-2 px-10 py-1  bg-[#1877f2] text-xl text-[#fff] font-medium font-serif rounded-md mb-4"
      >
        Update Details
      </button>
    </div>
  )
}
