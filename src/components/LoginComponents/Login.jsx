import React, { useState } from "react";
import user from "./user.png";
import key from "./key.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import { 
    FormInner, 
    Title,
    Subtitle, 
    MailContainer, 
    PasswordContainer, 
    LoginBtn, 
    ChangeView,
    Twitter,
    TwitterLogo,
    Facebook,
    FacebookLogo
} from "../../styles/Login/LoginFormStyles";
import SingUp from "./SingUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const Login = () => {
      const [loginEmail, setLoginEmail] = useState("");
      const [loginPassword, setLoginPassword] = useState("");
      (async () => {
        const rawResponse = await fetch('https://estudio-ghibli-2022.herokuapp.com/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      }
    )()
    

    return (
        <FormInner>
            <Title>Studio Ghibli Tracker</Title>
            <Subtitle>Login</Subtitle>
            <MailContainer className="MailContainer">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    placeholder="example@mail.com"
                    // onChange={(e) => setLoginEmail(e.target.value)} 
                    />
                <img src={user} alt="user logo" />
            </MailContainer>
            <PasswordContainer className="PasswordContainer">
                <label htmlFor="password">
                    Password
                </label>
                <input type="password"
                     placeholder="******"
                    //  onChange={(e) => setLoginPassword(e.target.value)}
                    />
                <img src={key} alt="key logo" />
            </PasswordContainer>

            <LoginBtn type="button" className="LoginBtn" onClick={Login}>Login</LoginBtn>

            <ChangeView onClick={<Route path="/singup" element={<SingUp />} />}>Or create an account</ChangeView>
            

            <Twitter type="submit" value="Connect with Twitter" className="twitter" />
            <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
            <Facebook type="submit" value="Connect with Facebook" className="Facebook" />
            <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
        </FormInner>
    )
  };
export default Login;