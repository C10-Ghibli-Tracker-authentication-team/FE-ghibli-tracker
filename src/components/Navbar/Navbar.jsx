import React from 'react';
import user from './user-icon.svg';
import search from './search.svg';
import {
  Container,
  User,
  UserIcon,
  Search,
  SearchIcon,
} from '../../styles/Navbar/NavbarStyles';

const Navbar = () => {
  return (
    <>
      <Container className="container-menu">
        <User href="/account">
          <UserIcon src={user} alt="account" className="user-icon" />
        </User>

        <Search href="/search">
          <SearchIcon src={search} alt="search" className="search-icon" />
        </Search>
      </Container>
    </>
  );
};

export default Navbar;
