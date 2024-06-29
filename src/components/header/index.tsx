import { ButtonContainer, ButtonIcon, Container, FazerLogin, HeaderButton, LogoContainer, MicContainer, SearchButton, SearchContainer, SearchInput, SearchInputContainer, UserButton } from "./styles"
import HamburgerIcon from '../../assets/hamburger.png';
import LogoIcon from '../../assets/YouTube-Logo.png';
import LupaIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import SinoIcon from '../../assets/sino.png'
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { ContextStorage } from "../../context/loginContext";
import { DropMenuContext } from "../../context/dropMenuContext";



function Header() {
    const { login } = useContext(ContextStorage)
    const {openMenu, setOpenMenu, getSearch} = useContext(UserContext)
    const navigate = useNavigate()
    const {dropMenu, setDropMenu} = useContext(DropMenuContext)
    const searchNavigate = useNavigate()
    const [pesquisa, setPesquisa] = useState('')

    const handleSearch = () => { 
        getSearch(pesquisa) 
        searchNavigate('/search')
    }

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width:'100px' }}
                    alt=""
                    src={LogoIcon}              
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton onClick={() => handleSearch() }>
                    <ButtonIcon alt="" src={LupaIcon} />
                </SearchButton>
                <MicContainer margin='0 0 0 10px'>
                    <ButtonIcon  alt="" src={MicIcon} />
                </MicContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon  alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon  alt="" src={SinoIcon} />
                </ButtonContainer>

                {
                    login?
                
                <UserButton onClick={() => setDropMenu(!dropMenu)}  margin='0 0 0 10px'>
                    J
                </UserButton>
                :
                <FazerLogin onClick={() => navigate('/login')}>fazer login</FazerLogin>
                }
                
            </HeaderButton>
        </Container>
    )
}

export default Header