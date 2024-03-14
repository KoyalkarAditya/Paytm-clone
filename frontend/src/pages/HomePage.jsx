import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" shadow-lg w-1/2 shadow-md h-1/2 lg:w-1/3">
        <div className="flex items-center justify-center">
          <img className=" h-40" src="../../paytm.png" alt="paytm" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            label={"signin"}
            onClick={() => {
              navigate("/signin");
            }}
          />
          <Button
            label={"signup"}
            onClick={() => {
              navigate("/signup");
            }}
          />
        </div>
      </div>
    </div>
  );
}
