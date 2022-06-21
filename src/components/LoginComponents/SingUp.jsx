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
    UserContainer, 
    PasswordContainer, 
    LoginBtn, 
    ChangeView,
    Twitter,
    TwitterLogo,
    Facebook,
    FacebookLogo
} from "../../styles/Login/LoginFormStyles";

const Register = () => {
  const [registerMail, setRegisterMail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  (async () => {
    const rawResponse = await fetch('https://estudio-ghibli-2022.herokuapp.com/signup/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: registerMail,
        userName: registerUsername,
        password: registerPassword})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }
)() 

    return (
        <FormInner>
            <Title>Studio Ghibli Tracker</Title>
            <Subtitle>Register</Subtitle>
            <MailContainer className="MailContainer">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    placeholder="example@mail.com"
                    onChange={(e) => setRegisterMail(e.target.value)} 
                    />
                <img src={user} alt="user logo" />
            </MailContainer>
            <UserContainer className="UserContainer">
                <label htmlFor="user">
                    User
                </label>
                <input 
                    placeholder="Your User"
                    onChange={(e) => setRegisterUsername(e.target.value)} 
                    />
                <img src={user} alt="user logo" />
            </UserContainer>
            <PasswordContainer className="PasswordContainer">
                <label htmlFor="password">
                    Password
                </label>
                <input 
                     placeholder="******"
                     onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                <img src={key} alt="key logo" />
            </PasswordContainer>

            <LoginBtn type="button" className="LoginBtn" onClick={Register}>Submit</LoginBtn>

            <ChangeView>Or login</ChangeView>
            

            <Twitter type="submit" value="Connect with Twitter" className="twitter" />
            <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
            <Facebook type="submit" value="Connect with Facebook" className="Facebook" />
            <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
        </FormInner>
    )
  };
export default Register;