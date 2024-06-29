import React from "react";
import {  useContext } from "react";
import { Container, Divider, FooterContainer, FooterContent, FooterCopyright, MenuItem, ClickVoce, SubTitle, MenuIcon, ContainerIcon} from "./styles";
import { UserContext } from "../../context/userContext";
import { ButtonIcon } from "../header/styles";
import { explorarMenu, inscricoesMenu, lastMenu, maisMenu, menuIcons, voceMenu } from "../../menu-icons/menuIcons";
import { useNavigate } from "react-router-dom";


function Menu() {
    const {openMenu} = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <Container openMenu={openMenu}>
           
            {menuIcons.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <MenuIcon alt="" src={item.icon} />
                        <span>{item.nome}</span>
                </MenuItem>
            ))}

            <ContainerIcon openMenu={openMenu}>
                <Divider />

                <ClickVoce><span>{'Você ﹥'}</span></ClickVoce>
            
                {voceMenu.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <MenuIcon alt="" src={item.icon}/>
                        <span>{item.nome}</span>
                </MenuItem>
                ))}
           

            <Divider />

            <SubTitle><h4>Inscrições</h4></SubTitle>

            {inscricoesMenu.map((item) => (
                <MenuItem openMenu={openMenu}>
                        <MenuIcon alt="" src={item.icon}/>
                        <span>{item.nome}</span>
                </MenuItem>
            ))}

            <Divider />

            <SubTitle><h4>Explorar</h4></SubTitle>

            {explorarMenu.map((item) => (
                <MenuItem openMenu={openMenu}>
                        <MenuIcon alt="" src={item.icon}/>
                        <span>{item.nome}</span>
                </MenuItem>
            ))}

            <Divider />

            <SubTitle><h4>Mais do YouTube</h4></SubTitle>

            {maisMenu.map((item) => (
                <MenuItem openMenu={openMenu}>
                        <MenuIcon alt="" src={item.icon}/>
                        <span>{item.nome}</span>
                </MenuItem>
            ))}

            <Divider />

            {lastMenu.map((item) => (
                <MenuItem openMenu={openMenu}>
                        <MenuIcon alt="" src={item.icon}/>
                        <span>{item.nome}</span>
                </MenuItem>
            ))}

            <Divider />

            <FooterContainer>
                <FooterContent>Sobre Imprensa Direitos autorais Entre em contato Criadores de conteúdo Publicidade Desenvolvedores</FooterContent>

                <FooterContent>Termos Privacidade Política e segurança Como funciona o YouTube Testar os novos recursos</FooterContent>
                
                <FooterCopyright>© 2024 Google LLC</FooterCopyright>
            </FooterContainer>
            </ContainerIcon>
        </Container>
     
    )
}

export default Menu