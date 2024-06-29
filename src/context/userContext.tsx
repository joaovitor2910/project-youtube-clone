import { createContext, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any)

export const UserStore = ({ children }: any) => {
    const [openMenu, setOpenMenu] = useState(true)
    const [videosTitle, setVideostitle] = useState([])

    const getSearch = (title: any) => {
        api.get(`/videos/search?search=${title}`).then(({data}) => {
            setVideostitle(data.videos)
            console.log(videosTitle);
            
        }).catch((error) => {
            console.log(error, 'nada encontrado');
        })
    }

    return (
        <UserContext.Provider value={{openMenu, setOpenMenu, getSearch, videosTitle}}>
            {children}
        </UserContext.Provider>
    )
}

