import React from 'react';
import user from './user-icon.svg';
import search from './search.svg';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Navbar/NavbarStyles';

const NavbarHome = () => {
  return (
    <>
      <Container>
        <Link to="/account">
          <img src={user} alt="account" />
        </Link>
        <Link to="/search">
          <img src={search} alt="search" />
        </Link>
      </Container>
    </>
  );
};

export default NavbarHome;
