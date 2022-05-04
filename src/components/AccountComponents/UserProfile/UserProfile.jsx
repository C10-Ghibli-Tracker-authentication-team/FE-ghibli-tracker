import React from 'react';
import user_profile from '../assets/user_profile.jpg';
import {
  UserInfo,
  Figure,
  Image,
  UserName,
  UserLinks,
  A,
} from '../../Styles/UserProfileStyles';

const UserProfile = ({ username }) => {
  return (
    <>
    {/* USER INFORMATION */}
      <UserInfo>
        <Figure>
          <Image src={user_profile} alt="user image profile" />
        </Figure>
        <UserName className="username">
          {/* {username} */} Santiago Bastidas
        </UserName>
      </UserInfo>
    {/* USER LINKS */}
      <UserLinks>
        <A>Scores</A>
        <A>Passwords</A>
      </UserLinks>
    </>
  );
};

export default UserProfile;
