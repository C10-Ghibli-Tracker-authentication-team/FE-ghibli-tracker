import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOutBtn } from "../../styles/Landing/ProfileStyles";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogOutBtn onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </LogOutBtn>
  );
};

export default LogoutButton;