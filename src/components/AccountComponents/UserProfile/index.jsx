import React, { useState, useEffect } from 'react';
import user_profile from '../assets/user_profile.jpg';
import {
  UserInfo,
  Figure,
  Image,
  UserName,
} from '../../../styles/UserProfile/UserProfileStyles';

const UserProfile = () => {
  // const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://estudio-ghibli-2022.herokuapp.com/auth/facebook').then((r) =>
      console.log(r.json())
    );
  }, []);

  // console.log(user);
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
