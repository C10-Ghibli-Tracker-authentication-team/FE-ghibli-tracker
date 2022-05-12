import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarUser from './NavbarHome';
import NavbarArrow from './NavbarArrow';
import NavbarHidden from './NavbarHidden';

const Navbar = () => {
  const location = useLocation().pathname;

  if (location === '/login') {
    return <NavbarHidden />;
  } else if (location === '/') {
    return <NavbarUser />;
  } else {
    return <NavbarArrow />;
  }
};

export default Navbar;