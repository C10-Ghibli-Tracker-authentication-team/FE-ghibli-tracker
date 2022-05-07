import React from 'react';
import user from './user-icon.svg';
import { Link } from 'react-router-dom';
import search from './search.svg';
import {
  Container,
  // Link,
  UserIcon,
  SearchIcon,
} from '../../styles/Navbar/NavbarStyles';

const Navbar = () => {
  return (
    <>
      <Container className="container-menu">
        <Link to="/account">
          <UserIcon src={user} alt="account" />
        </Link>
        <Link to="/search">
          <SearchIcon src={search} alt="search" />
        </Link>
      </Container>
    </>
  );
};

export default Navbar;
