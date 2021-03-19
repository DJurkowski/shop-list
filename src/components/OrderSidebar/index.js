import React, { useRef } from 'react';
import useOutsideClick from '../../utils/hooks/useOutsideClick';
import { SidebarOutsidebar, SidebarContainer, OrderboxWrapper, CloseIcon, ItemsWrap, FooterWrap, FooterElement, ElementWrap, ElementImg, ElementPriceWrap, ElementPriceLabel, ElementPrice, BackButton, BuyButton  } from './SidebarElements';
import delivery from '../../utils/images/delivery.svg';
import OrderItem from './OrderItem';

const OrderSidebar = ({ isOpen, closeAction }) => {

    const ref = useRef();

    useOutsideClick(ref, () => {
        if(isOpen) closeAction(false);
    });

    return (
        isOpen && 
        <SidebarOutsidebar>
            <SidebarContainer>
                <OrderboxWrapper ref={ref}>
                    <CloseIcon onClick={() => closeAction(false)}/>
                    <ItemsWrap>
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                    </ItemsWrap>
                    <FooterWrap>
                        <FooterElement>
                            <ElementWrap>
                                <ElementImg src={delivery} alt="delivery"/>
                                Darmowa dostawa
                            </ElementWrap>
                            <ElementPriceWrap>
                                <ElementPriceLabel>Suma:</ElementPriceLabel>
                                <ElementPrice>288,00 zł</ElementPrice>
                            </ElementPriceWrap>     
                        </FooterElement>
                        <FooterElement>
                            <BackButton onClick={() => closeAction(false)}>wróć</BackButton>
                            <BuyButton>opłać</BuyButton>
                        </FooterElement>
                    </FooterWrap>
                </OrderboxWrapper>
            </SidebarContainer>
        </SidebarOutsidebar>
    );
};

export default OrderSidebar;
