import React from 'react';
import { UserLinks, A } from '../../../styles/UserLinks/UserLinksStyles';

const UserLink = () => {
  return (
    <>
      <UserLinks>
        <A>Scores</A>
        <A>Passwords</A>
      </UserLinks>
    </>
  );
};

export default UserLink;
