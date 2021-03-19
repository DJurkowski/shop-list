import React from 'react';
import { ItemContainer, NewLabel, Image, ContentWrap, Name, Desc, DescLabel, DescType, PrevPrice, CurrentPrice, Footer, Button, ButtonIcon, Plus } from './ShopItemElements';

const Item = ({ name, type, isNew, sensor, price, promotionalPrice, imageUrl }) => {
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
                {promotionalPrice && <PrevPrice>{promotionalPrice} zł</PrevPrice>}
                <CurrentPrice>{price} zł</CurrentPrice>
            </ContentWrap>
            <Footer>Darmowa dostawa od 100 złotych</Footer>
            <Button><ButtonIcon><Plus/></ButtonIcon>Dodaj do koszyka</Button>
        </ItemContainer>
    );
};

export default Item;
