import React from 'react';
import UserProfile from '../components/AccountComponents/UserProfile';
import { Container } from '../styles/Account/AccountStyles';
import UserLink from '../components/AccountComponents/UserLinks/';
import UserProgress from '../components/AccountComponents/UserProgress';

function Account() {
  return (
    <>
      <Container>
        <UserProfile />
        <UserLink></UserLink>
        <UserProgress />
      </Container>
    </>
  );
}

export default Account;
