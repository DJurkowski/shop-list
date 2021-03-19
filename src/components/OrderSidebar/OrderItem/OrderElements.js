import styled from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #707070;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    padding: 10px;
    height: 100px;
    width: 120px;

    @media screen and (max-width: 440px) {
        display: none;
    }
`;

export const ItemContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    padding: 20px 10px 20px 0;

    @media screen and (max-width: 440px) {
        padding-left: 10px;
    }
`;

export const Name = styled.h2`
    color: #00BE97;
    font-family: 'Rubik';
    font-size: 16px;
    font-weight: 700;
`;

export const Desc = styled.div`
    margin-top: 3px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Arial'; 

    @media screen and (max-width: 440px) {
        justify-content: flex-start;
    }
`;

export const DescLabel = styled.div`
    font-weight: bold;
    font-size: 11px;
    justify-self: flex-start;
    margin: 5px 0;
`;

export const DescType = styled.div`
   font-size: 11px;
   font-weight: normal;
   color: #212121;
   margin: 5px 0;

   @media screen and (max-width: 440px) {
        margin-left: 5px;
    }
`;

export const ItemRighBarWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 10px;
`;

export const PrevPrice = styled.div`
    align-self: flex-end;
    color: #FF6E2E;
    text-decoration: line-through;
    font-family: 'Rubik', 'Arial';
    font-size: 15px;
    font-weight: 500;
    margin: 5px 0;
`;

export const CurrentPrice = styled.div`
    align-self: flex-end;
    color: #00BE97;
    font-family: 'Rubik';
    font-weight: medium;
    font-size: 20px;
    font-weight: bold;
    border: none;
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const AcitonLabel = styled.div`
    margin: 0;
    font-size: 11px;
    font-family: 'Arial';
    font-weight: 700;
    color: #212121;
    margin-right: 5px;
`;

export const ActionInput = styled.input`
    width: 36px;
    border: 1px solid #7E7E7E;
    border-radius: 10px;
    text-align: center;
    margin-right: 5px;
`;

export const ActionIcon = styled.img`
    cursor: pointer;
    width: 15px;
    height: 17px;
    color: #7E7E7E;
`;