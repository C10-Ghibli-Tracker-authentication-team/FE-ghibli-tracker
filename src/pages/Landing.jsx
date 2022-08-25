import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/LoginComponents/LoginButton';
import LogoutButton from '../components/LoginComponents/LogOut';
import { Profile } from "../components/LoginComponents/Profile";
import { Container, Image, Welcome, Join } from "../styles/Landing/LandingStyles";
import StudioGhibli from "./StudioGhibli.png";


function Landing() {
    const { isAuthenticated } = useAuth0();

    return (
      <Container>
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <>
            <Image src={StudioGhibli} alt="Studio Ghibli" />
            <Welcome>Welcome to Studio Ghibli Tracker, your new favorite app</Welcome> 
            <Join>Join to our community and start this adventure interacting with all Studio Ghibli movies</Join>
            <LoginButton />
            </>
          )}
      </Container>
    );
}

export default Landing;