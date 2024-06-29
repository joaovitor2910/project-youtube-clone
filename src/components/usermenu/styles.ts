import styled from "styled-components";

export const UserMenu = styled.div<{dropMenu: boolean}>`
    background-color: white;
    display: ${({ dropMenu }) => dropMenu? 'block' : 'none'};
    width: 300px;
    height: 200px;
    position: fixed;
    top: 10px;
    right: 85px;
    z-index: 9999;
    border-radius: 8px;
    box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.2)
`

export const UserContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const UserProfile = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 15px 0 0 20px;
`

export const UserIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: brown;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`

export const UserSpan = styled.span`
    font-size: 17px;
`
export const MeusVideosSpan = styled.div`
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 15px;
    font-size: 17px;
    cursor: pointer;
    &:hover {
        background-color: #dbdbdb;
    }
`