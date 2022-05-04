import React from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';
import UserProfile from '../components/AccountComponents/UserProfile/UserProfile';
import UserProfileTablet from '../components/AccountComponents/UserProfile/UserProfileTablet';
import UserProfileDesktop from '../components/AccountComponents/UserProfile/UserProfileDesktop';

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
          <UserProfile />,
        </Breakpoint>

        <Breakpoint medium only>
          <UserProfileTablet />,
        </Breakpoint>

        <Breakpoint large up>
          <UserProfileDesktop />,
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default Account;
