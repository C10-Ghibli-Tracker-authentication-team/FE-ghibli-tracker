import React from 'react';
import {
  Container,
  ContainerNavbar,
  ContainerFilter,
  RightIcons,
} from '../../styles/Navbar/NavbarFilterStyles';
import { Link } from 'react-router-dom';
import filter from './assets/filter.svg';
import arrow from './assets/arrow-back.svg';
import search from './assets/search.svg';
import './assets/down-arrow.svg';
import DropDownList from './DropDownList';

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
          <DropDownList />
        </ContainerFilter>
      </Container>
    </>
  );
};

export default NavbarFilter;
