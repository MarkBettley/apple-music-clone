import React from 'react';
import { HeaderWrapper, Logo, LogoIcon, LogoText, Nav, NavLink } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <LogoIcon>🎵</LogoIcon>
        <LogoText>Music<span>Library</span></LogoText>
      </Logo>
      <Nav>
        <NavLink href="#" $active>Inicio</NavLink>
        <NavLink href="#">Explorar</NavLink>
        <NavLink href="#">Favoritos</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;