import React from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';
import Navbar from '../Navbar/Navbar';
import NavbarTablet from '../Navbar/NavbarTablet';
import NavbarDesktop from '../Navbar/NavbarDesktop';
import UserProfile from '../UserProfile/UserProfile';
import { User } from '../../Styles/NavbarStyles';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 992 }, // smaller laptops
]);

function Account() {
  return (
    <>
      <BreakpointProvider>
        <Breakpoint small down>
          <Navbar />,
          <UserProfile />,
        </Breakpoint>

        <Breakpoint medium only>
          <NavbarTablet />,
          <UserProfile />,
        </Breakpoint>

        <Breakpoint large up>
          <NavbarDesktop />,
          <UserProfile />,
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default Account;
