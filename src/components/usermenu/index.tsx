import { useContext } from "react"
import { IconLogout, LogoutContainer } from "../../pages/home/styles"
import { AcessarCanal, ContentItems, UserItems } from "../header/styles"
import { MeusVideosSpan, UserContent, UserIcon, UserInfo, UserMenu, UserProfile, UserSpan } from "./styles"
import { UserContext } from "../../context/userContext"
import { DropMenuContext } from "../../context/dropMenuContext"
import { ContextStorage } from "../../context/loginContext"
import { useNavigate } from "react-router-dom"
import IconSair from '../../assets/saida.png'


function MenuUser() {
    const {openMenu} = useContext(UserContext)
    const {dropMenu} = useContext(DropMenuContext)
    const { logout } = useContext(ContextStorage)
    const navigateVideos = useNavigate()
    const logoutNavigate = useNavigate()
    const desconectar = () => {
        logoutNavigate('/login')
        logout()
    }
    return (
        <UserMenu dropMenu={dropMenu}>
            <UserContent>
                <UserProfile>
                    <UserIcon>
                    J
                    </UserIcon>
                    <UserInfo>
                        <UserSpan>João Vitor</UserSpan>
                        <UserSpan>@joaozera4646</UserSpan>
                        <AcessarCanal>Acessar seu canal</AcessarCanal>
                    </UserInfo>
                </UserProfile>

                <LogoutContainer onClick={() => desconectar()}>
                    <IconLogout src={IconSair}/>
                    <UserSpan>Sair</UserSpan>
                </LogoutContainer>
                <ContentItems>
                    <MeusVideosSpan onClick={() => navigateVideos('/seus-videos')}>Meus Videos</MeusVideosSpan>
                </ContentItems>
            </UserContent>

        </UserMenu>
    )
}

export default MenuUser