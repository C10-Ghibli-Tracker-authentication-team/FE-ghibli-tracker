import React from 'react';
import Navbar from './Navbar/';
import NavbarTablet from './Navbar/NavbarTablet';
import NavbarDesktop from './Navbar/NavbarDesktop';
import Films from './home/index';
import FilmsTablet from './home/FilmsTablet';
import FilmsDesktop from './home/FilmsDesktop';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
    { xsmall: 0 }, // all mobile devices
    { small: 576 }, // mobile devices (not sure which one's this big)
    { medium: 768 }, // ipad, ipad pro, ipad mini, etc
    { large: 992 }, // smaller laptops 
  ]);



function App() {
  return (

    <>
      <BreakpointProvider>
      <Breakpoint small down>
          <Navbar />,
          <Films />,
      </Breakpoint>

      <Breakpoint medium only>
          <NavbarTablet />,
          <FilmsTablet />,
      </Breakpoint>

      <Breakpoint large up>
          <NavbarDesktop />,
          <FilmsDesktop />,
      </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default App;
