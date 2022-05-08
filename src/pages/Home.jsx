import React from 'react';
import Films from '../Components/HomeComponents/Films/index';
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
          <Films />,
        </Breakpoint>

        <Breakpoint large up>
          <Films />,
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default Home;
