import styled from 'styled-components';


export const SidebarOutsidebar = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255,255,255, 0.6);
    position: absolute;
    z-index: 2;
`;

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
`;

export const OrderboxWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 500px;
    min-height: 360px;
    height: auto;
    box-shadow: 1px 1px 5px #00000029;
    border-radius: 10px 0px 0px 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
`;

export const CloseIcon = styled.div`
        cursor: pointer;
        width: 60px;
        height: 60px;
        position: relative;

        &:after {
            content: '';
            height: 25px;
            border-left: 5px solid #000;
            position: absolute;
            transform: rotate(45deg);
            left: 28px;
            top: 20px;
        }

        &:before {
            content: '';
            height: 25px;
            border-left: 5px solid #000;
            position: absolute;
            transform: rotate(-45deg);
            left: 28px;
            top: 20px;
        }
`;

export const ItemsWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 28px 10px 28px;
`;

export const NoItems = styled.div`
    color: #7E7E7E;
    font-size: 11px;
    font-weight: bold;
    text-align: center;
`;


export const FooterElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const ElementWrap = styled.div`
    color: #7E7E7E;
    font-size: 11px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -6px;
`;

export const ElementPriceWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 10px;
`;

export const ElementPriceLabel = styled.div`
    text-transform: uppercase;
    color: #212121;
    font-size: 11px;
    font-family: 'Arial';
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ElementPrice = styled.div`
    color: #00BE97;
    font-family: 'Rubik';
    font-weight: medium;
    font-size: 20px;
    font-weight: bold;
    border: none;
`;

export const ElementImg = styled.img`
    width: 25px;
    height: 15px;
`;

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 28px;
    bottom: 30px;
    width: 100%;

`;

export const BackButton = styled.div`
    cursor: pointer;
    height: 18px;
    width: 36px;
    color: #212121;
    font-family: 'Rubik';
    font-size: 15px;
    font-weight: 700;
`;

export const BuyButton = styled.div`
    background: #00BE97;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px 0px;
    width: 105px;
    height: 40px;
    color: #fff;
    font-family: 'Rubik';
    font-size: 15px;
`;