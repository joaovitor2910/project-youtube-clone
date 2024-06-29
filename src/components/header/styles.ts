import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    

    &:hover {
        
        background-color: #f2f2f2;
    }
`;

export const MicContainer = styled.div<{ margin?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f2f2f2;

    &:hover {
        
        background-color: #dbdbdb;
    }
`;


export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    width: 65px;
    height: 35px;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`;
 

export const AcessarCanal = styled.span`
    color: #1a75ff;
    margin-top: 5px;
`


export const ContentItems = styled.div`
    width: 100%;
    height: 30px;

    &:hover {
        background-color: #8c8c8c;
    }
`

export const UserItems = styled.span`
    font-size: 13px;
`

export const ContainerUserLogin = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
`

export const UserButton = styled.div<{ margin?: string}>`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: brown;
    color: aliceblue;
    font-size: 18px;
    font-weight: bold;
`

export const FazerLogin = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid blue;
    background-color: white;
    color: blue;
    font-weight: bold;
    cursor: pointer;
`