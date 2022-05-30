import React from 'react';
import user from "./user.png";
import key from "./key.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";
import { 
    FormInner, 
    Title, 
    UserContainer, 
    PasswordContainer, 
    LoginBtn, 
    Twitter,
    TwitterLogo,
    Facebook,
    FacebookLogo
} from "../../styles/Login/LoginFormStyles";
import { AuthContext } from "../../pages/Login";



export const Login = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
      email: "",
      password: "",
      isSubmitting: false,
      errorMessage: null
    };
  
    const [data, setData] = React.useState(initialState);
  
    const handleInputChange = event => {
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    };
  
    const handleFormSubmit = event => {
      event.preventDefault();
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null
      });
      fetch("https://be-ghibli-tracker.herokuapp.com/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then(resJson => {
          dispatch({
              type: "LOGIN",
              payload: resJson
          })
        })
        .catch(error => {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: error.message || error.statusText
          });
        });
    };

    return (
        <FormInner onSubmit={handleFormSubmit}>
            <Title>Studio Ghibli Tracker</Title>
            <UserContainer className="UserContainer">
                <label htmlFor="user">
                    User
                </label>
                <input 
                    type="email" 
                    // value={data.email}
                    onChange={handleInputChange}  
                    name="user" 
                    id="user" 
                    />
                <img src={user} alt="user logo" />
            </UserContainer>
            <PasswordContainer className="PasswordContainer">
                <label htmlFor="password">
                    Password
                </label>
                <input 
                    type="password"
                    value={data.password}
                    onChange={handleInputChange}
                    name="password"
                    id="password"
                    />
                <img src={key} alt="key logo" />
            </PasswordContainer>

                {data.errorMessage && (
                <span className="form-error">{data.errorMessage}</span>
                )}

            <LoginBtn type="button" className="LoginBtn" disabled={data.isSubmitting}>LOGIN</LoginBtn>
            

            <Twitter type="submit" value="Connect with Twitter" className="twitter" />
            <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
            <Facebook type="submit" value="Connect with Facebook" className="Facebook" />
            <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
        </FormInner>
    )
}

export default Login;