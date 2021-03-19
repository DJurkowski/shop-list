import React from 'react';

import { ItemContainer, Image, ItemContentWrap, Name, Desc, DescLabel, DescType, ItemRighBarWrap, PrevPrice, CurrentPrice,ActionWrapper, AcitonLabel, ActionInput, ActionIcon } from './OrderElements';
import image from '../../../utils/images/ListItem/mouse.png';
import trash from '../../../utils/images/trash.svg';

const OrderItem = () => {
    return (
        <ItemContainer>
            <Image src={image} alt="image"/>
            <ItemContentWrap>
                <Name>SteelSeries Rival 3</Name>
                <Desc>
                    <DescLabel>Typ myszki: </DescLabel>
                    <DescType>Dla gracza</DescType>
                </Desc>
                <Desc>
                    <DescLabel>Sensor: </DescLabel>
                    <DescType>optyczny</DescType>
                </Desc>
            </ItemContentWrap>
            <ItemRighBarWrap>
                <PrevPrice>199,00 zł</PrevPrice>
                <CurrentPrice>159,00 zł</CurrentPrice>
                <ActionWrapper>
                    <AcitonLabel>szt.</AcitonLabel>
                    <ActionInput value="1"/>
                    <ActionIcon src={trash} alt="trash"/>
                </ActionWrapper>
            </ItemRighBarWrap>
        </ItemContainer>
    );
};

export default OrderItem;
