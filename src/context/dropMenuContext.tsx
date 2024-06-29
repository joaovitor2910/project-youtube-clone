import { createContext, useState } from "react";

export const DropMenuContext = createContext({} as any)

export const UserDropMenu = ({ children }: any) => {
    const [dropMenu, setDropMenu] = useState(false)

    return (
        <DropMenuContext.Provider value={{dropMenu, setDropMenu}}>
            {children}
        </DropMenuContext.Provider>
    )
}