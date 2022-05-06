import React from 'react';
import user_profile from '../assets/user_profile.jpg';
import {
  UserInfo,
  Figure,
  Image,
  UserName,
} from '../../../styles/UserProfile/UserProfileStyles';

const UserProfile = () => {
  return (
    <>
      <UserInfo>
        <Figure>
          <Image src={user_profile} alt="user image profile" />
        </Figure>
        <UserName className="username">{/* {username} */} santiagobr</UserName>
      </UserInfo>
    </>
  );
};

export default UserProfile;