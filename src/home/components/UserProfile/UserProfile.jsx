import React from 'react';
import user_profile from './user_profile.jpg';
import {
  UserInfo,
  Figure,
  Image,
  UserName,
} from '../../Styles/UserProfileStyles';

const UserProfile = ({ username }) => {
  return (
    <>
      <UserInfo>
        <Figure>
          <Image src={user_profile} alt="user image profile" />
        </Figure>
        <UserName className="username">{username}</UserName>
      </UserInfo>
    </>
  );
};

export default UserProfile;
