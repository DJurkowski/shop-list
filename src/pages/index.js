import React, { useState } from 'react'
import Container from '../components/Container';
import ContainerNavbar from '../components/Container/Navbar';
import Footer from '../components/Footer';
import OrderSidebar from '../components/OrderSidebar';
import List from '../components/ShopList';
import { Context } from '../utils/context/Context';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    const handleSidebar = (value) => {
        setIsOpen(value);
    };

    return (
        <Context.Provider value={[orders, setOrders]}>
            <Container>
                <OrderSidebar isOpen={isOpen} closeAction={handleSidebar}/>
                <ContainerNavbar action={handleSidebar}/>
                <List />
            </Container>
            <Footer />  
        </Context.Provider>
    )
}

export default Home
