import styled from "styled-components";

export const ContainerCateg = styled.div`
    display: flex;
    width: 100%;
    height: 55px;
    box-sizing: border-box;
    column-gap: 20px;
    position: fixed;
    top: 55px;
    background-color: #fff;
    z-index: 0;
`

export const ItemCategori = styled.div`
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

export const ItemSpan = styled.div`
    
    font-weight: 640;
    font-size: 14px;
`