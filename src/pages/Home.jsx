import React from 'react';
import Films from '../components/HomeComponents/Films/Films';
import FilmsTablet from '../components/HomeComponents/Films/FilmsTablet';
import FilmsDesktop from '../components/HomeComponents/Films/FilmsDesktop';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 992 }, // smaller laptops
]);

function Home() {
  return (
    <>
      <BreakpointProvider>
        <Breakpoint small down>
          <Films />,
        </Breakpoint>

        <Breakpoint medium only>
          <FilmsTablet />,
        </Breakpoint>

        <Breakpoint large up>
          <FilmsDesktop />,
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default Home;
