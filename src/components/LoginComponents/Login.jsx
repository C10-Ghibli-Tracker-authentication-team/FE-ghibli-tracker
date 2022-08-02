import React, { useContext } from "react";
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
  RedirectLink,
} from "../../styles/Login/LoginFormStyles";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  return (
    <FormInner onSubmit={loginUser}>
      <Title>Studio Ghibli Tracker</Title>
      <Subtitle>Login</Subtitle>
      <Container>
        <label>Email</label>
        <input name="username" type="mail" placeholder="example@mail.com" />
        <img src={userLogo} alt="user logo" />
      </Container>
      <Container>
        <label>Password</label>
        <input name="password" type="password" placeholder="******" />
        <img src={key} alt="key logo" />
      </Container>

      <LoginBtn type="submit">Login</LoginBtn>

      <Redirect>
        <RedirectLabel>Don't have an account?</RedirectLabel>
        <RedirectLink to="/register">Register</RedirectLink>
      </Redirect>

      <Twitter type="submit" value="Connect with Twitter" className="twitter" />
      <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
      <Facebook
        type="submit"
        value="Connect with Facebook"
        className="Facebook"
      />
      <FacebookLogo
        src={facebook}
        alt="Facebook logo"
        className="FacebookLogo"
      />
    </FormInner>
  );
};

return (
  <FormInner>
    <Title>Studio Ghibli Tracker</Title>
    <Subtitle>Login</Subtitle>
    <Container className="MailContainer">
      <label htmlFor="email">Email</label>
      <input
        placeholder="example@mail.com"
        onChange={(e) => setUsername(e.target.value)}
      />
      <img src={userLogo} alt="user logo" />
    </Container>
    <Container className="PasswordContainer">
      <label htmlFor="password">Password</label>
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
      Login
    </LoginBtn>

    <Redirect>
      <RedirectLabel>Don't have an account?</RedirectLabel>
      <RedirectLink to="/register">Register</RedirectLink>
    </Redirect>

    <Twitter type="submit" value="Connect with Twitter" className="twitter" />
    <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
    <Facebook
      type="submit"
      value="Connect with Facebook"
      className="Facebook"
    />
    <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
  </FormInner>
);

export default Login;
