import { createContext, useContext } from "react"
import api from "../api"

export const CreateUserContext = createContext({} as any)

export const UserCreateStorage = ({ children }: any) => {

    const handleCreate = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password})
    }

    return (
        <CreateUserContext.Provider value={{
            handleCreate
        }}>
            {children}
        </CreateUserContext.Provider>
    )
}