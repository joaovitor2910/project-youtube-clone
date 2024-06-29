import { useCallback, useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { Banner, YourVideosContainer } from "../../components/yourVideos/styles"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { PesquisaContainer, PesquisaContent, PesquisaText, PesquisaTextContent, PesquisaVideoContent, ThumbnailPesquisa } from "./styles"

function Search() {
    const {videosTitle} = useContext(UserContext)
    return (
        <>
        <Header />
        <PesquisaContainer>
        <Menu />
        <PesquisaContent>
          {videosTitle.map((item: any) => (
            <PesquisaVideoContent>
                <ThumbnailPesquisa alt="thumbnail" src={item.banner}/>
                <PesquisaTextContent>
                <PesquisaText>{item.title}</PesquisaText>
                <PesquisaText>{item.description}</PesquisaText>
                </PesquisaTextContent>
            </PesquisaVideoContent>
          ))}
        </PesquisaContent>
        </PesquisaContainer>
        </>
    )
}

export default Search