import { createContext } from "react"
import { User } from "./types"

export const AuthContext = createContext<User | null>(null)
