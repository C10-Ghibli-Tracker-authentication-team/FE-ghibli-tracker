import React, { useState, useEffect } from 'react';
import user_profile from '../assets/user_profile.jpg';
import {
  UserInfo,
  Figure,
  Image,
  UserName,
} from '../../../styles/UserProfile/UserProfileStyles';

const UserProfile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://be-ghibli-tracker.herokuapp.com/auth/facebook')
      .then((r) => console.log(r.json()))
      .then((u) => setUser(u));
  }, []);

  console.log(user);
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
