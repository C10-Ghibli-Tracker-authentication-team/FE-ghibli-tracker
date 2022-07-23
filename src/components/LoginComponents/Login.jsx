import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userLogo from "./user.png";
import key from "./key.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import { 
    FormInner, 
    Title,
    Subtitle, 
    Container, 
    LoginBtn, 
    Twitter,
    TwitterLogo,
    Facebook,
    FacebookLogo,
    Redirect,
    RedirectLabel,
    RedirectLink
} from "../../styles/Login/LoginFormStyles";


const Login = () => {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      let navigate = useNavigate();

      const onSubmitHandler = (async () => {
         const rawResponse = await fetch('https://estudio-ghibli-2022.herokuapp.com/login', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + username.token
           },
           body: JSON.stringify({
             email: username,
             password: password})
         });
         const content = await rawResponse.json();

         console.log(content);
       })

    return (
      <FormInner>
        <Title>Studio Ghibli Tracker</Title>
        <Subtitle>Login</Subtitle>
            <Container className="MailContainer">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                    placeholder="example@mail.com"
                    onChange={(e) => setUsername(e.target.value)} 
                    />
                <img src={userLogo} alt="user logo" />
            </Container>
            <Container className="PasswordContainer">
                <label htmlFor="password">
                    Password
                </label>
                <input 
                     placeholder="******"
                     onChange={(e) => setPassword(e.target.value)}
                    />
                <img src={key} alt="key logo" />
            </Container>

            <LoginBtn
              type="button" 
              className="LoginBtn" 
              onClick={(e) => {
                  e.preventDefault();
                  onSubmitHandler();
                  navigate("/");
                                  }}
            >
              Login</LoginBtn>

            <Redirect>
                    <RedirectLabel>Don't have an account?</RedirectLabel>
                    <RedirectLink to="/register">Register</RedirectLink>
                </Redirect>


            <Twitter type="submit" value="Connect with Twitter" className="twitter" />
            <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
            <Facebook type="submit" value="Connect with Facebook" className="Facebook" />
            <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
        </FormInner>
    )
  };
export default Login;