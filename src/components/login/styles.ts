import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const LoginContent = styled.div`
    width: 470px;
    height: 520px;
    border: 1px solid #8c8c8c;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border-radius: 8px;
    row-gap: 10px;
    padding: 50px 20px;
    box-sizing: border-box;

    input {
        width: 90%;
        height: 50px;
        border-radius: 6px;
        border: 1px solid #8c8c8c;
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
        outline: blue;
    }

    :focus {
        border: 1px solid #1a75ff;
    }

    ::placeholder {
        
        font-size: 16px;
        color: gray;
    }
`

export const LogoGoogle = styled.img`
    width: 75px;
    height: 25px;
`

export const GoogleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    margin-bottom: 20px;
`

export const ButtonCreate = styled.button`
    height: 20px;
    border: none;
    background-color: #fff;
    color: #1a75ff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`

export const ButtonLogin = styled.button`
    width: 100px;
    height: 35px;
    background-color: #1a75ff;
    color: #fff;
    border-radius: 6px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`