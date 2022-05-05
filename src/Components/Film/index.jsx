import React from 'react';
// import Navbar from '../Navbar';
// import NavbarTablet from '../Navbar/NavbarTablet';
import NavbarArrow from '../Components/Navbar/NavbarArrow';
// import Films from '../home';
// import FilmsTablet from '../home/FilmsTablet';
import MovieDesktop from './MovieDesktop';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';
// import { Routes, Route, Link } from "react-router-dom";

setDefaultBreakpoints([
    { xsmall: 0 }, // all mobile devices
    { small: 576 }, // mobile devices (not sure which one's this big)
    { medium: 768 }, // ipad, ipad pro, ipad mini, etc
    { large: 992 }, // smaller laptops 
  ]);



function MovieApp() {
  return (

    <>
    <BreakpointProvider>
      <Breakpoint large up>
          <NavbarArrow />,
          <MovieDesktop />,
      </Breakpoint>
    </BreakpointProvider>
    </>
  );
}

export default MovieApp;
