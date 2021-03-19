import React, { useContext } from 'react';
import { NavbarContainer, Logo, Basket, IconWrapper, Notification } from './NavbarElements';
import logo from '../../../utils/images/logo.svg';
import basket from '../../../utils/images/basket.svg';
import { Context } from '../../../utils/context/Context';

const Navbar = ({action}) => {

    const [orders, setOrders] = useContext(Context);

    return (
        <NavbarContainer>
            <Logo src={logo} alt="10A" />
            <IconWrapper>
                <Basket src={basket} alt="basket" onClick={action}/>
                {orders.length >0 && <Notification>{orders.reduce((prev,next) => prev += next.itemCounter,0)}</Notification>}
            </IconWrapper>
        </NavbarContainer>
    );
};

export default Navbar;
