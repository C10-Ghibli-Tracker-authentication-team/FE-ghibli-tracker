import React from 'react';
import Navbar from './home/components/Navbar/Navbar';
import NavbarTablet from './home/components/Navbar/NavbarTablet';
import NavbarDesktop from './home/components/Navbar/NavbarDesktop';
import Films from './home/components/Films/Films';
import FilmsTablet from './home/components/Films/FilmsTablet';
import FilmsDesktop from './home/components/Films/FilmsDesktop';
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