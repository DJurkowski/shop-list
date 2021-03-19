import React, { useState } from 'react'
import Container from '../components/Container';
import ContainerNavbar from '../components/Container/Navbar';
import OrderSidebar from '../components/OrderSidebar';
import List from '../components/ShopList';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = (value) => {
        setIsOpen(value);
    };

    return (
        <Container>
            <OrderSidebar isOpen={isOpen} closeAction={handleSidebar}/>
            <ContainerNavbar action={handleSidebar}/>
            <List />
        </Container>
    )
}

export default Home
