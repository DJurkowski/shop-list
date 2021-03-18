import React, { useState } from 'react'
import Container from '../components/Container';
import ContainerNavbar from '../components/Container/Navbar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <ContainerNavbar />
                
        </Container>
    )
}

export default Home
