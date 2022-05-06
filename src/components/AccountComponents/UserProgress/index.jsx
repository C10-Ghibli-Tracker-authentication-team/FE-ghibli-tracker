import React from 'react';
import {
  Container,
  Over,
  Bar,
  BarWrap,
  Progress,
} from '../../../styles/UserProgress/UserProgressStyles';

const UserProfile = () => {
  return (
    <>
      <Container>
        <Over>MOVIES WATCHED</Over>
        <BarWrap>
          <Bar></Bar>
        </BarWrap>
        <Progress>17/24</Progress>
      </Container>
    </>
  );
};

export default UserProfile;
