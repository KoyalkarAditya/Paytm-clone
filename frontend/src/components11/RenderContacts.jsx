import React, { useState, useMemo, useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { filterAtom } from "../store/atoms/Atom"
export default function RenderContacts({ username }) {
  const [filter, setFilter] = useRecoilState(filterAtom)
  const [allUsers, setAllUsers] = useState([])
  const debounceTimeout = useRef(null)
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/user/bulk?filter=${filter}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      const json = await response.json()
      const users = json.user.filter((person) => person.username !== username)
      setAllUsers(users)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const debounceFetchData = () => {
    clearTimeout(debounceTimeout.current)
    debounceTimeout.current = setTimeout(() => {
      fetchData()
    }, 300)
  }

  useEffect(() => {
    debounceFetchData()
  }, [filter])

  const memoizedAllUsers = useMemo(() => allUsers, [allUsers])
  return (
    <div className="flex  justify-center flex-col">
      <div className="flex justify-center">
        <input
          placeholder="search in your contact list"
          className="  border-2 border-gray-400 text-base text-start px-10 py-1 font-thin font-serif text-gray-500 rounded-md"
          type="text"
          onChange={(e) => {
            setFilter(e.target.value)
          }}
        />
      </div>
      <div className="grid grid-cols-1 mt-10 justify-center gap-10 sm:grid-cols-2 md:grid-cols-4">
        {memoizedAllUsers.map((user, index) => {
          const { username, firstName, lastName } = user
          return (
            <div
              key={index}
              className="p-3 font-serif bg-blue-400 rounded-md shadow-md grid gap-y-2 "
            >
              <h1 className=" font-medium">{username}</h1>
              <h1>
                {firstName} {lastName}
              </h1>
              <input
                className="  border-2 border-gray-400 text-base text-start px-10 py-1 font-thin font-serif text-gray-500 rounded-md"
                type="text"
                placeholder="enter amount"
              />
              <button className="mt-2 px-10 py-1  bg-green-500  text-xl text-[#fff] font-medium font-serif rounded-md mb-4">
                send money
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
