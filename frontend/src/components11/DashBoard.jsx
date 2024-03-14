import React, { useEffect } from "react"
import TopBar from "./TopBar"
import { useRecoilState, useSetRecoilState } from "recoil"
import { passwordAtom, usernameAtom } from "../store/atoms/Atom"
import CheckBalance from "./CheckBalance"
import RenderContacts from "./RenderContacts"

export default function DashBoard() {
  const [usernameValue, setUsername] = useRecoilState(usernameAtom)
  const setPassword = useSetRecoilState(passwordAtom)
  const username = usernameValue
  useEffect(() => {
    setPassword("")
    setUsername("")
  }, [])
  return (
    <div>
      <TopBar />
      <CheckBalance />
      <RenderContacts username={username} />

      <div className="flex justify-center mt-10">
        {" "}
        <img className="h-80 rounded-md" src="..//paytm-img.jpg" alt="" />
      </div>
    </div>
  )
}
