import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { InputBox } from "../components/InputBox"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Users = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.user)
      })
  }, [filter])
  return (
    <div className="m-4">
      <div className="font-semibold text-base font-sans">Users</div>
      <div>
        <InputBox
          onChange={(e) => {
            setFilter(e.target.value)
          }}
          type="text"
          placeholder="search users"
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-3">
        {users.map((user) => {
          return <User key={user._id} user={user} />
        })}
      </div>
    </div>
  )
}
function User({ user }) {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button
          label={"Send Money"}
          onClick={(e) => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`)
          }}
        />
      </div>
    </div>
  )
}
