import React from 'react';

import { ItemContainer, Image, ItemContentWrap, Name, Desc, DescLabel, DescType, ItemRighBarWrap, PrevPrice, CurrentPrice,ActionWrapper, AcitonLabel, ActionInput, ActionIcon } from './OrderElements';
import trash from '../../../utils/images/trash.svg';

const OrderItem = ({ name, type, sensor, price, promotionalPrice, imageUrl, itemCounter, handleDelete, handleInput }) => {
    return (
        <ItemContainer>
            <Image src={imageUrl} alt={name}/>
            <ItemContentWrap>
                <Name>{name}</Name>
                <Desc>
                    <DescLabel>Typ myszki: </DescLabel>
                    <DescType>{type}</DescType>
                </Desc>
                <Desc>
                    <DescLabel>Sensor: </DescLabel>
                    <DescType>{sensor}</DescType>
                </Desc>
            </ItemContentWrap>
            <ItemRighBarWrap>
                {promotionalPrice && <PrevPrice>{promotionalPrice.toFixed(2)} zł</PrevPrice>}
                <CurrentPrice>{price.toFixed(2)} zł</CurrentPrice>
                <ActionWrapper>
                    <AcitonLabel>szt.</AcitonLabel>
                    <ActionInput name="itemCounter" value={itemCounter} onChange={(e) => handleInput(e, name)}/>
                    <ActionIcon src={trash} alt="trash" onClick={(e) => handleDelete(e,name)}/>
                </ActionWrapper>
            </ItemRighBarWrap>
        </ItemContainer>
    );
};

export default OrderItem;
