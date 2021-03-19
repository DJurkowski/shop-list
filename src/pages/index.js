import React, { useState } from 'react'
import Container from '../components/Container';
import ContainerNavbar from '../components/Container/Navbar';
import List from '../components/ShopList';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <ContainerNavbar />
            <List />
        </Container>
    )
}

export default Home
