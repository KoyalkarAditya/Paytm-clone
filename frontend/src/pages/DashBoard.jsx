import React, { useEffect, useMemo, useState } from "react"
import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
export default function DashBoard() {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    getBalance()
  }, [balance])
  async function getBalance() {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balances",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setBalance(response.data.balance)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <AppBar />
      <Balance value={balance.toFixed(2)} />
      <Users />
    </div>
  )
}
