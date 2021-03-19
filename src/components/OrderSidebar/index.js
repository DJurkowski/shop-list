import React, { useRef, useContext } from 'react';
import useOutsideClick from '../../utils/hooks/useOutsideClick';
import { SidebarOutsidebar, SidebarContainer, OrderboxWrapper, CloseIcon, ItemsWrap, FooterWrap, FooterElement, ElementWrap, ElementImg, ElementPriceWrap, ElementPriceLabel, ElementPrice, BackButton, BuyButton, NoItems } from './SidebarElements';
import delivery from '../../utils/images/delivery.svg';
import OrderItem from './OrderItem';
import { Context } from '../../utils/context/Context';

const OrderSidebar = ({ isOpen, closeAction }) => {

    const ref = useRef();
    const [orders, setOrders] = useContext(Context);

    useOutsideClick(ref, () => {
        if(isOpen) closeAction(false);
    });

    const handleDelete = (e, name) => {
        e.stopPropagation();
        setOrders(
            orders.filter((order) => order.name !== name)
        );
    };

    const handleInput = (e, name) => {
        const event = e.target;
        if(event.value > '0') {
            setOrders(
                orders.map((order) => order.name === name ? {
                    ...order,
                    [event.name] : parseInt(event.value)
                } : order)
            );
        }
    };

    return (
        isOpen && 
        <SidebarOutsidebar>
            <SidebarContainer>
                <OrderboxWrapper ref={ref}>
                    <CloseIcon onClick={() => closeAction(false)}/>
                    <ItemsWrap>
                        {orders.length>0 ? orders.map(order => (
                            <OrderItem key={order.name} {...order} handleDelete={handleDelete} handleInput={handleInput} />
                        ))
                        :(
                            <NoItems>Twój koszyk jest pusty</NoItems>
                        )
                        }
                    </ItemsWrap>
                    <FooterWrap>
                        <FooterElement>
                            <ElementWrap>
                                <ElementImg src={delivery} alt="delivery"/>
                                Darmowa dostawa
                            </ElementWrap>
                            <ElementPriceWrap>
                                <ElementPriceLabel>Suma:</ElementPriceLabel>
                                <ElementPrice>
                                {orders.length > 0 && orders.reduce((prev, next) =>
                                    prev += next.itemCounter * next.price,0
                                ).toFixed(2)} zł
                                </ElementPrice>
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
