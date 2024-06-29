import { useContext, useState } from "react"
import Header from "../../components/header"
import Menu from "../../components/menu"
import {  ButtonCloseModal, ButtonModal, MeusVideosContainer, ModalBackground, ModalContainer, ModalContent, UserVideosContainer, UserVideosPage } from "./styles"
import { ContextStorage } from "../../context/loginContext"
import YourVideosCards from "../../components/yourVideos"
import MenuUser from "../../components/usermenu"

function VideosUser() {
    const {user, userVideos, createVideo, token, login} = useContext(ContextStorage)
    const [titulo, setTitle] = useState('')
    const [descricao, setDescription] = useState('')
    const [banner, setBanner] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    const USER_ID = user.id
    
    const enviarVideo = () => {
        createVideo(token, USER_ID, titulo, descricao, banner)
        setModalOpen(false)
    }

    return (
        <>
            <Header />
            <MenuUser />
            <UserVideosContainer>
            <Menu />
                
                { login ? 
                <>
                <ButtonModal modalOpen={modalOpen} onClick={() => setModalOpen(true)}>escolher arquivo</ButtonModal>
                <MeusVideosContainer>
                {userVideos.map((item: any) => (
                       <YourVideosCards title={item.title} description={item.description} banner={item.banner}/>
                    ))}
                </MeusVideosContainer>
                
                
                <ModalBackground modalOpen={modalOpen}>
                    <ModalContainer>
                        <ModalContent>
                        <input type="text" placeholder="Digite a URL do seu Banner" value={banner} onChange={(e) => setBanner(e.target.value)} />

                            <input type="text" placeholder="título" value={titulo} onChange={(e) => setTitle(e.target.value)} />

                            <input type="text" placeholder="description" value={descricao} onChange={(e) => setDescription(e.target.value)} />

                            <ButtonCloseModal onClick={() => enviarVideo() } >Enviar video</ButtonCloseModal>
                            <ButtonCloseModal onClick={() => setModalOpen(false)} >Cancelar</ButtonCloseModal>
                        </ModalContent>
                    </ModalContainer>
                </ModalBackground>
                </>
                :
                'faça login primeiro'
                }
            </UserVideosContainer>
        </>
    )
}

export default VideosUser