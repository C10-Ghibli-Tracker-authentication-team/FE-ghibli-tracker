import React, { useState } from 'react';
import user from './user.png';
import key from './key.png';
import twitter from './twitter.png';
import facebook from './facebook.png';
import {
  FormInner,
  Title,
  Subtitle,
  MailContainer,
  UserContainer,
  PasswordContainer,
  LoginBtn,
  ChangeView,
  Twitter,
  TwitterLogo,
  Facebook,
  FacebookLogo,
} from '../../styles/Login/LoginFormStyles';

const getData = async (email, user, password) => {
  const rawResponse = await fetch(
    'https://estudio-ghibli-2022.herokuapp.com/signup/',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        userName: user,
        password: password,
      }),
    }
  );
  const content = await rawResponse.json();

  console.log(content);
};

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUser, setRegisterUser] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");


  return (
    <FormInner onSubmit={() => getData((registerEmail, registerUser, registerPassword))} >
      <Title>Studio Ghibli Tracker</Title>
      <Subtitle>Register</Subtitle>
      <MailContainer className='MailContainer'>
        <label htmlFor='email'>Email</label>
        <input placeholder='example@mail.com' onChange={(e) => setRegisterEmail(e.target.value)}/>
        <img src={user} alt='user logo' />
      </MailContainer>
      <UserContainer className='UserContainer'>
        <label htmlFor='user'>User</label>
        <input placeholder='Your User' onChange={(e) => setRegisterUser(e.target.value)}/>
        <img src={user} alt='user logo' />
      </UserContainer>
      <PasswordContainer className='PasswordContainer'>
        <label htmlFor='password'>Password</label>
        <input placeholder='******' onChange={(e) => setRegisterPassword(e.target.value)}/>
        <img src={key} alt='key logo' />
      </PasswordContainer>
      <LoginBtn type='submit' className='LoginBtn'>
        Enviar
      </LoginBtn>

      <ChangeView>Or login</ChangeView>

      <Twitter type='submit' value='Connect with Twitter' className='twitter' />
      <TwitterLogo src={twitter} alt='Twitter logo' className='TwitterLogo' />
      <Facebook
        type='submit'
        value='Connect with Facebook'
        className='Facebook'
      />
      <FacebookLogo
        src={facebook}
        alt='Facebook logo'
        className='FacebookLogo'
      />
    </FormInner>
  );
};
export default Register;
