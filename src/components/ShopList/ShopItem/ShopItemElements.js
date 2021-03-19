import styled from 'styled-components';


export const Button = styled.div`
    display: none;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    background: #00BE97;
    color: #fff;
    font-family: 'Rubik';
    font-size: 15px;
    border-radius: 25px 0px;
    width: 216px;
    height: 40px;
    position: absolute;
    bottom: 15px;

    &:hover {
        background: #00a382;
    }

    @media screen and (max-width: 520px) {
        width: 150px;
        font-size: 12px;
    }
`;

export const Footer = styled.div`
    color: #7E7E7E;
    font-size: 11px;
    font-weight: bold;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 20px;

    @media screen and (max-width: 460px){
        font-size: 10px;
    } 
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    min-height: 353px;
    height: 353px;
    padding: 10px 0;
    margin: 5px 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px #00000029;
    transition: height 0.4s ease-in-out;
    position: relative;

    &:hover ${Button} {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover ${Footer} {
        display: none;
    }

    &:hover {
        height: 373px;
        transition: height 0.4s ease-in-out;
    }

    @media screen and (max-width: 460px){
        min-height: 300px;
        height: 300px;

        &:hover {
            height: 323px;
            transition: height 0.4s ease-in-out;
        }
    } 
`;

export const NewLabel = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100px;
    height: 20px;
    padding: 2px;
    text-align: center;
    background: #00BE97;
    color: #fff;
    font-family: 'Rubik', 'Arial';
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px 0px;
    text-decoration: uppercase;
`;

export const Image = styled.img`
    width: 162px;
    height: 139px;
    border-radius: 10px;

    @media screen and (max-width: 460px){
        width: 110px;
        height: 100px;
    } 
`;

export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15px;
    width: 100%;
`;

export const Name = styled.h2`
    margin: 10px 0 10px 0;
    color: #00BE97;
    font-size: 20px;
    font-family: 'Rubik', 'Arial';
    text-align: center;
    overflow: hidden;
    height: 50px;
    display: flex;

    @media screen and (max-width: 460px){
        font-size: 15px;
    } 
`;

export const Desc = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Arial'; 
`;

export const DescLabel = styled.div`
    font-weight: bold;
    
    font-size: 11px;
    justify-self: flex-start;
    margin: 0 0 5px;

    @media screen and (max-width: 460px){
        font-size: 10px;
    } 
`;
export const DescType = styled.div`
   font-size: 11px;
   align-items: flex-end;
   font-weight: normal;
   color: #212121;

   @media screen and (max-width: 460px){
        font-size: 10px;
    } 
`;

export const PrevPrice = styled.div`
    visibility: ${({value}) => value != null ? 'visible' : 'hidden' };
    height: 18px;
    align-self: flex-end;
    color: #FF6E2E;
    text-decoration: line-through;
    font-family: 'Rubik', 'Arial';
    font-size: 15px;
    font-weight: 500;
    margin: 5px 0;

    @media screen and (max-width: 460px){
        font-size: 12px;
    } 
`;

export const CurrentPrice = styled.div`
    align-self: flex-end;
    height: 18px;
    color: #00BE97;
    font-family: 'Rubik';
    font-weight: medium;
    font-size: 20px;
    font-weight: bold;
    border: none;

    @media screen and (max-width: 460px){
        font-size: 15px;
    } 
`;

export const Plus = styled.span`
    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background:#fff;
    }

    &::before {
        width: 1.7px;
        margin: 2px auto;
    }

    &::after {
        margin: auto 2px;
        height: 1.7px;
    }
`;

export const ButtonIcon = styled.span`
    border: 2px solid #fff;
    width:20px;
    height:20px;
    border-radius:100%;
    position:relative;
    margin:4px;
    padding: 5px;
    display:inline-block;
    vertical-align:middle;
    margin-right: 5px;
`;

export const FooterImg = styled.img`
    width: 25px;
    height: 15px;
`;


