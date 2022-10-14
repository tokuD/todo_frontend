import "../styles/globals.css"
import type { AppProps } from "next/app"
import React, { useState } from "react"
import Header from "../components/Header"
import { AuthContext } from "../utils/context"
import { User } from "../utils/types"

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User|null>(null)

  return (
    <React.Fragment>
      <Header user={user}/>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
