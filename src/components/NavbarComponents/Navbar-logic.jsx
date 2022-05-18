import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarUser from './NavbarHome';
import NavbarArrow from './NavbarArrow';
import NavbarHidden from './NavbarHidden';
import NavbarFilter from './NavbarFilter';

const Navbar = () => {
  const location = useLocation().pathname;

  if (location === '/login') {
    return <NavbarHidden />;
  } else if (location === '/') {
    return <NavbarUser />;
  } else if (location === '/filter') {
    return <NavbarFilter />;
  } else {
    return <NavbarArrow />;
  }
};

export default Navbar;
