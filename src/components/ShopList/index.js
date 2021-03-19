import React, { useState, useEffect, useContext } from 'react';
import Item from './ShopItem';
import { ListContainer } from './ShopListElements';
import data from '../../utils/data/products.json';
import { Context } from '../../utils/context/Context';

const List = () => {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useContext(Context)

    useEffect(() => {
        setProducts(data.products);
    },[]);

    const handleOrder = (item) => {
        if(orders.length > 0) {
            const isExist = orders.some((order) => order.name === item.name);
            if(isExist) {
                setOrders(
                    orders.map((order) => order.name === item.name ? {...order, itemCounter: order.itemCounter + 1 }: order )
                );
            } else {
                setOrders([
                    ...orders,
                    {
                        ...item,
                        itemCounter: 1
                    }
                ]);
            }

        } else {
            setOrders([{
                ...item,
                itemCounter: 1
            }]);
        }
    }

    return (
        <ListContainer>
            {products && products.map(product => (
                <Item key={product.name} product={product} handleOrder={handleOrder} {...product} />
            ))}
        </ListContainer>
    );
};

export default List;
