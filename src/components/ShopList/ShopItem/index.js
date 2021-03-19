import React from 'react';
import { ItemContainer, NewLabel, Image, ContentWrap, Name, Desc, DescLabel, DescType, PrevPrice, CurrentPrice, Footer, Button, ButtonIcon, Plus } from './ShopItemElements';
import image from '../../../utils/images/ListItem/mouse.png';

const Item = () => {
    return (
        <ItemContainer>
            <NewLabel>Nowość!</NewLabel>
            <Image src={image} alt="name"></Image>
            <ContentWrap>
                <Name>SteelSeries Rival 3</Name>
                <Desc>
                    <DescLabel>Typ myszki: </DescLabel>
                    <DescType>Dla gracza</DescType>
                </Desc>
                <Desc>
                    <DescLabel>Sensor: </DescLabel>
                    <DescType>Optyczny</DescType>
                </Desc>
                <PrevPrice>199,00 zł</PrevPrice>
                <CurrentPrice>159,00 zł</CurrentPrice>
            </ContentWrap>
            <Footer>Darmowa dostawa od 100 złotych</Footer>
            <Button><ButtonIcon><Plus/></ButtonIcon>Dodaj do koszyka</Button>
        </ItemContainer>
    );
};

export default Item;
