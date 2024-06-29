import styled from "styled-components";


export const Container = styled.div<{openMenu: boolean}>`
    width: ${({ openMenu }) => openMenu? '290px' : '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: hidden;
    overflow-x: hidden;
    position: sticky;
    top: 55px;

    &:hover {
        overflow-y: auto;
    }
`;

export const MenuIcon = styled.img`
    width: 20px;
`;

export const ContainerIcon = styled.div<{openMenu: boolean}>`
    display: ${({ openMenu }) => openMenu? 'block' : 'none'} ;
`

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};
    

    span {
        font-weight: ${({ openMenu }) => openMenu? '500' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '14px' : '12px'};
    }

    &:hover {
        background-color: #f2f2f2;
    }

`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    margin: 10px 0;
`

export const ClickVoce = styled.div`
    width: 90%;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 20px 17px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 18px;
    
    &:hover {
        background-color: #f2f2f2;
    }
` 

export const FooterContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`

export const FooterContent = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: #8c8c8c;
    cursor: pointer;
`

export const FooterCopyright = styled.span`
    font-size: 12px;
    font-weight: 100;
    color: #8c8c8c;
`
export const SubTitle = styled.div`
    width: 98%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 20px 17px;
    box-sizing: border-box;
    font-weight: 450;
    font-size: 18px;

    h4 {
        font-weight: 450;
    }
`

