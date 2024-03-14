import React, { useEffect } from "react";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function UpdateInfo() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" shadow-lg w-1/2 shadow-md h-1/2 lg:w-1/3">
        <div className="flex items-center justify-center text-xl font-sans font-bold">
          Update Details
        </div>
        <div className="flex flex-col justify-center items-center">
          <InputBox
            placeholder={"Enter New FirstName"}
            type={"text"}
            label={" First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            placeholder={"Enter New LastName"}
            type={"text"}
            label={"Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            placeholder={"Enter New Password"}
            type={"text"}
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="mt-6 py-1 px-16 bg-[#1877f2]  text-md text-[#fff] font-medium font-serif rounded-md"
            onClick={async () => {
              const updatedFeilds = {};
              if (firstName) {
                updatedFeilds.firstName = firstName;
              }
              if (lastName) {
                updatedFeilds.lastName = lastName;
              }
              if (password) {
                updatedFeilds.password = password;
              }
              const responce = axios.put(
                "http://localhost:3000/api/v1/user/update",
                updatedFeilds,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            }}
          >
            Apply Changes{" "}
          </button>
          <button
            className="mt-6 py-1 px-16 bg-[#1877f2]  text-md text-[#fff] font-medium font-serif rounded-md"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
