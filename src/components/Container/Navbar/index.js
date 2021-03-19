import React from 'react';
import { NavbarContainer, Logo, Basket } from './NavbarElements';
import logo from '../../../utils/images/logo.svg';
import basket from '../../../utils/images/basket.svg';

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src={logo} alt="10A" />
            <Basket src={basket} alt="basket"/>
        </NavbarContainer>
    );
};

export default Navbar;