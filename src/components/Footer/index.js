import React from 'react';
import logo from '../../utils/images/logo-white.svg';
import { FooterContainer, FooterMainBox, FooterBox, FooterWrap, Image, BoxElement, BoxMutedElement, LinkHeader, LinkHeaderBorder, Link, Rights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMainBox>
                <Image src={logo} alt="10A" />
                <BoxElement>555-555-555</BoxElement>
                <BoxElement>Mail@mail.com</BoxElement>
                <BoxMutedElement>Sosnowiec. PO zmroku 44</BoxMutedElement>
                <Rights>Copyright@10a.io</Rights>
            </FooterMainBox>
            <FooterWrap>
                <FooterBox>
                    <LinkHeader>MAPA STRONY</LinkHeader>
                    <LinkHeaderBorder />
                    <Link>MAPA STRONY</Link>
                    <Link>MAPA STRONY</Link>
                    <Link>MAPA STRONY</Link>
                    <Link>MAPA STRONY</Link>
                </FooterBox>
                <FooterBox>
                    <LinkHeader>PRODUKTY</LinkHeader>
                    <LinkHeaderBorder />
                    <Link>MYSZKI A</Link>
                    <Link>MYSZKI B</Link>
                    <Link>MYSZKI C</Link>
                </FooterBox>
            </FooterWrap>
            
        </FooterContainer>
    );
};

export default Footer;
