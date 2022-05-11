import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarUser from './NavbarHome';
import NavbarArrow from './NavbarArrow';

const Navbar = () => {
  return useLocation().pathname === '/' ? <NavbarUser /> : <NavbarArrow />;
};

export default Navbar;
