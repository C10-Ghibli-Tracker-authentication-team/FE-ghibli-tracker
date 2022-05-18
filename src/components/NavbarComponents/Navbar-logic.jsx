import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarUser from './NavbarHome';
import NavbarArrow from './NavbarArrow';
import NavbarHidden from './NavbarHidden';
import NavbarFilter from './NavbarFilter';

const Navbar = () => {
  const location = useLocation().pathname;

  const PATH_NAVBAR = {
    '/login': <NavbarHidden />,
    '/': <NavbarUser />,
    '/filter': <NavbarFilter />,
  };

  const NAV = PATH_NAVBAR[location] || <NavbarArrow />;
  return NAV;
};

export default Navbar;
