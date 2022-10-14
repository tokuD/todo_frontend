import React, { useState } from "react"
import { backendUrl } from "../utils/backend"
import { Token } from "../utils/types"
import axios from "axios"

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const res = await fetch(backendUrl + "/auth/token", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: JSON.stringify({
    //     username: email,
    //     password: password,
    //   }),
    // })
    // const data: Token = await res.json()
    axios
      .post(backendUrl + "/auth/token", { username: email, password: password })
      .then((res) => {
        console.log(res)
      })
    // console.log(data)
    // localStorage.setItem("access_token", data.access_token)
    // localStorage.setItem("token_type", data.token_type)
  }

  return (
    <div>
      {/* <form action="http://localhost:8000/auth/token" method="post"> */}
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">email</label>
        <input
          onChange={onChangeEmail}
          className="border border-gray-500"
          type="email"
          id="email"
          name="username"
          value={email}
        />
        <label htmlFor="password">password</label>
        <input
          onChange={onChangePassword}
          className="border border-gray-500"
          type="password"
          id="password"
          name="password"
          value={password}
        />
        <button className="border border-gray-400" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
