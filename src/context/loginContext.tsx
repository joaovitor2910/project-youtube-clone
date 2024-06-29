import { createContext, useEffect, useState } from "react"
import api from "../api"


export const ContextStorage = createContext({} as any)

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(localStorage.getItem('token') as string)
    const [userVideos, setUserVideos] = useState([])

    const getVideos =  (token: string, user_id: string) => {
        api.get(`/videos/get-videos/${user_id}`, {headers: {Authorization: token}}).then(({data}) => {
            setUserVideos(data.videos)
            console.log(data.videos)
        }).catch((error) => {
            console.log(error);
            
        })

        console.log(userVideos);
    }

    const createVideo = (token: string, user_id: string, title: string, description: string, banner: string) => {
        api.post('/videos/create-video', {user_id, title, description, banner}, {headers:{Authorization: token}}).then(() => {
            alert('video enviado com sucesso')
            getUser(token)

        }).catch((error) => {
            console.log(error);
            alert('Erro ao criar video')
            
        })
    }

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(( {data}) => {
            setUser(data.user)
            setLogin(true)
            getVideos(token, data.user.id)
        }).catch((error) => {
            console.log('Usuario não autenticado', error)
        })
    }

    useEffect(() => {
        getUser(token)
    }, [token])

    const logout = () => {
        localStorage.removeItem('token')
        setLogin(false)
        setUser({})
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({data}) => {
            setLogin(true)
            localStorage.setItem('token', data.token)
            setToken(data.token)
            getUser(data.token)
        }).catch((error) => {
            console.log('Não foi possivel fazer o login', error)
        })
    }

    return (
        <ContextStorage.Provider value={{
            login,
            user,
            token,
            handleLogin,
            logout,
            userVideos,
            createVideo,
            getVideos
        }}>
            {children}
        </ContextStorage.Provider>
    )

}