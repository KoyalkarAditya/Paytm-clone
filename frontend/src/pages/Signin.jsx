import React, { useState } from "react"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Signin() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center p-3 gap-2 shadow-md rounded-lg w-100">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access the account" />
        <InputBox
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          type="email"
          label="Email"
          placeholder="John@gmail.com"
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
          label="password"
          placeholder="12345678"
        />
        <Button
          onClick={async () => {
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              )
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            } catch (error) {
              alert(error.response.data.message)
            }
          }}
          label="Sign in"
        />
        <ButtonWarning
          label="Don't have an account? "
          buttonText="Sign Up"
          to="/signup"
        />
      </div>
    </div>
  )
}
