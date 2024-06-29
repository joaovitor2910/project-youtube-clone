import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 10px;
    box-sizing: border-box;
    column-gap: 10px;
`

export const ContainerHome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`

export const ContainerVideos = styled.div<{openMenu: boolean}>`
    width: 100%;
    margin-top: 50px;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'}; 
    column-gap: 20px;
    row-gap: 50px;
`

export const LogoutContainer = styled.div`
margin-top: 5px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    cursor: pointer;
    &:hover {
        background-color: #dbdbdb;
    }
`

export const IconLogout = styled.img`
    width: 24px;
    height: 24px;
    padding: 0 15px;
`