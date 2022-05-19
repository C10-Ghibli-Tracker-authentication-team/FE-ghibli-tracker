import React from 'react';
import {
  Container,
  ContainerNavbar,
  ContainerFilter,
  RightIcons,
  List,
} from '../../styles/Navbar/NavbarFilterStyles';
import { Link } from 'react-router-dom';
import filter from './assets/filter.svg';
import arrow from './assets/arrow-back.svg';
import search from './assets/search.svg';
import './assets/down-arrow.svg';

const NavbarFilter = () => {
  return (
    <>
      <Container>
        <ContainerNavbar className="container-menu">
          <Link to={'/'}>
            <img src={arrow} alt="back" className="arrow-icon" />
          </Link>
          <RightIcons>
            <img src={filter} alt="filter button"></img>
            <Link to={'/search'}>
              <img src={search} alt="search" className="search-icon" />
            </Link>
          </RightIcons>
        </ContainerNavbar>
        <ContainerFilter>
          <List />
        </ContainerFilter>
      </Container>
    </>
  );
};

export default NavbarFilter;
