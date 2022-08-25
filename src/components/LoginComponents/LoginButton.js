import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginBtn } from "../../styles/Landing/LandingStyles";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <LoginBtn onClick={() => loginWithRedirect()}>Log In</LoginBtn>;
};

export default LoginButton;