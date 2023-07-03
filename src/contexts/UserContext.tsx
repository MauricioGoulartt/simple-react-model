/* eslint-disable */

import { createContext, Dispatch, SetStateAction } from 'react'

export interface User {
  id: string
  email: string
}

export interface UserContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {}
})

export default UserContext
