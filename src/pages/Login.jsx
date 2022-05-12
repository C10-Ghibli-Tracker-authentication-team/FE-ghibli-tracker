import React from 'react';
import LoginForm from '../components/LoginComponents/index';
// import FilmsTablet from '../Components/HomeComponents/Films/FilmsTablet';
// import FilmsDesktop from '../Components/HomeComponents/Films/FilmsDesktop';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 992 }, // smaller laptops
]);

function Login() {
  return (
    <>
      <BreakpointProvider>
        <Breakpoint small down>
          <LoginForm />,
        </Breakpoint>

        <Breakpoint medium only>
          <LoginForm />,
        </Breakpoint>

        <Breakpoint large up>
          <LoginForm />,
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default Login;
