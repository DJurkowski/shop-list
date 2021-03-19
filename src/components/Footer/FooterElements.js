import styled from 'styled-components';

export const FooterContainer = styled.div`
    min-height: 270px;
    width: 100%;
    background: #212121;
    padding: 48px 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;

    position: relative;
`;

export const FooterMainBox = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const FooterBox = styled(FooterMainBox)`
    margin-left: 30px;
`;

export const FooterWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Image = styled.img`
    height: 50px;
    align-self: flex-start;
    margin-bottom: 10px;
`;

export const BoxElement = styled.div`
    text-transform: uppercase;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    margin-bottom: 5px;
`;

export const BoxMutedElement = styled.div`
    text-transform: uppercase;
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 15px;
    color: #fff;
`;

export const LinkHeader = styled.div`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    
    /* margin-bottom: 10px; */
`;

export const LinkHeaderBorder = styled.div`
    width: 40px;
    border-bottom: 2px solid #fff;
    border-width: 3px; 
    margin: 10px 0;
`;

export const Link = styled.div`
    text-transform: uppercase;
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 15px;  
    color: #00BE97;
    margin-bottom: 10px;

`;

export const Rights = styled.div`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 15px; 
    color: #fff;
    margin-top: 20px;
`;