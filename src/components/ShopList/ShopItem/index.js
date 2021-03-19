import React from 'react';
import { ItemContainer, NewLabel, Image, ContentWrap, Name, Desc, DescLabel, DescType, PrevPrice, CurrentPrice, Footer, FooterImg, Button, ButtonIcon, Plus } from './ShopItemElements';
import delivery from '../../../utils/images/delivery.svg';

const Item = ({ name, type, isNew, sensor, price, promotionalPrice, imageUrl, product, handleOrder }) => {
    return (
        <ItemContainer>
            {isNew && <NewLabel>Nowość!</NewLabel>}
            <Image src={imageUrl} alt={name} />
            <ContentWrap>
                <Name>{name}</Name>
                <Desc>
                    <DescLabel>Typ myszki: </DescLabel>
                    <DescType>{type}</DescType>
                </Desc>
                <Desc>
                    <DescLabel>Sensor: </DescLabel>
                    <DescType>{sensor}</DescType>
                </Desc>
                {promotionalPrice && <PrevPrice>{promotionalPrice.toFixed(2)} zł</PrevPrice>}
                <CurrentPrice>{price.toFixed(2)} zł</CurrentPrice>
            </ContentWrap>
            <Footer><FooterImg src={delivery} alt="delivery" />Darmowa dostawa od 100 złotych</Footer>
            <Button onClick={() => handleOrder(product)}><ButtonIcon><Plus/></ButtonIcon>Dodaj do koszyka</Button>
        </ItemContainer>
    );
};

export default Item;
