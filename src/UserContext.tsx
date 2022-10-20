
import React, { createContext, useState } from 'react';

export type User = {
    name: string
};

export type LoginContextType = {
  userContext: User,
  setUserContext: React.Dispatch<React.SetStateAction<User>>
};

type LoginContextProviderProps = {
    children: React.ReactNode
};

export const LoginContext = createContext({} as LoginContextType);

export const LoginContextProvider = ({ children }: LoginContextProviderProps) => {

    const [userContext, setUserContext] = useState<User>({name: 'Guest'})
    
    return (
        <LoginContext.Provider value={{ userContext, setUserContext }}>
            {children}
        </LoginContext.Provider>
    )
};


/* import { createContext, useContext } from "react"

export type GlobalContent = {
  user: string
  setUser:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
user: 'Guest', // set a default value
setUser: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext) */

