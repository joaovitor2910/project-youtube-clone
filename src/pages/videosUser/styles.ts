import styled from "styled-components";

export const UserVideosContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const UserVideosPage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 35px;
    row-gap: 20px;
`

export const ButtonModal = styled.button<{modalOpen: boolean}>`
    display: ${({ modalOpen }) => modalOpen? 'none' : 'block'};;
    width: 120px;
    height: 50px;
    font-size: 18px;
`

export const ModalBackground = styled.div<{modalOpen: boolean}>`
    display: ${({modalOpen}) => modalOpen? 'block' : 'none'};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
`

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: 700px;
    background-color: aliceblue;
    margin-bottom: 20px;
    input {
        width: 500px;
        height: 50px;
        
    }
`

export const ButtonCloseModal = styled.button`
    width: 120px;
    height: 50px;
`

export const MeusVideosContainer = styled.div`
    width: 70%;
    display: flex;
    column-gap: 20px;
    row-gap: 50px;
    flex-wrap: wrap;
`