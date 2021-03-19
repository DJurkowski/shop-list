import React from 'react';
import Item from './ShopItem';
import { ListContainer } from './ShopListElements';

const List = () => {
    return (
        <ListContainer>
            <Item />
            <Item />
            <Item />
        </ListContainer>
    );
};

export default List;
