import styled from "styled-components";

export const PesquisaContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const PesquisaContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-left: 25px;
`

export const PesquisaVideoContent = styled.div`
    width: 980px;
    height: 270px;
    display: flex;
`

export const PesquisaTextContent = styled.div`
    
    height: 270px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const PesquisaText = styled.span`
    font-size: 17px;
    color: gray;
`

export const ThumbnailPesquisa = styled.img`
    width: 480px;
    height: 270px;
    object-fit: cover;
    border-radius: 5px;
`