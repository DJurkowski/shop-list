import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    height: 40px;
`;

export const IconWrapper = styled.div`
    position: relative;
`;

export const Basket = styled.img`
    height: 30px;
    cursor: pointer;
`;

export const Notification = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 13px;
    border-radius: 50%;
    color: #fff;
    background: #00BE97;
    bottom: -7px;
    right: -7px;
`;