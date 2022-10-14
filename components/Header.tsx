import Link from "next/link"
import React from "react"
import { User } from "../utils/types"

type Props = {
  user: User | null
}

const backendUrl = "http://localhost:8000/"

const Header = (props: Props) => {

  return (
    <div className="w-full h-16 sticky flex justify-between">
      <div className="flex items-center">
        <h1 className="text-3xl">TODO</h1>
      </div>
      <div className="flex items-center">
        {props.user === null ? (
          <ul className="grid grid-cols-3 gap-4">
            <li>
              <button><Link href='/login'>Log In</Link></button>
            </li>
            <li>
              <button>Sign In</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button>Log out</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
