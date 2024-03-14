import React, { useState } from "react"
import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Signup() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center p-3 gap-2 shadow-md rounded-lg w-100">
        <Heading label="Sign Up" />
        <SubHeading label="Enter your Information to create an account" />
        <InputBox
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          type="text"
          label="First Name"
          placeholder="John"
        />
        <InputBox
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          type="text"
          label="Last Name"
          placeholder="Dae"
        />
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value)
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
          label="Sign in"
          onClick={async () => {
            try {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              )
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            } catch (error) {
              alert(error.response.data.message)
            }
          }}
        />
        <ButtonWarning
          label="Already have an account? "
          buttonText="Login"
          to="/signin"
        />
      </div>
    </div>
  )
}
