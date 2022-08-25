import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Image, Name, Email } from "../../styles/Landing/ProfileStyles";



export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "ghiblitrackerapi.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <Container>
        <Image src={user.picture} alt={user.name} />
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </Container>
    )
  );

};


