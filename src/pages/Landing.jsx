import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/LoginComponents/LoginButton';
import LogoutButton from '../components/LoginComponents/LogOut';
import { Profile } from "../components/LoginComponents/Profile";

function Landing() {
    const { isAuthenticated } = useAuth0();

    return (
      <div>
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
      </div>
    );
}

export default Landing;