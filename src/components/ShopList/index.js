import React, { useState, useEffect } from 'react';
import Item from './ShopItem';
import { ListContainer } from './ShopListElements';
import data from '../../utils/data/products.json';

const List = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.products);
    },[]);


    return (
        <ListContainer>
            {products && products.map(product => (
                <Item key={product.name} {...product} />
            ))}
        </ListContainer>
    );
};

export default List;
