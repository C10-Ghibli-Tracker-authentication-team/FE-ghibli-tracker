import React, { useState } from 'react';
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
} from "./../../styles/Login/LoginFormStyles";



function LoginForm({Login, error }) {
    const [details, setDetails] = useState({user: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
    <form onSubmit={submitHandler}>
        <FormInner>
            <Title>Studio Ghibli Tracker</Title>
            {(error != "") ? ( <div className="error">{error}</div>) : ""}
            <UserContainer className="UserContainer">
                <label htmlFor="user">User</label>
                <input type="text" name="user" id="user" onChange={e => setDetails({...details, user: e.target.value})} value={details.user} />
                <img src={user} alt="user logo" />
            </UserContainer>
            <PasswordContainer className="PasswordContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                <img src={key} alt="key logo" />
            </PasswordContainer>

            <LoginBtn type="submit" value="LOGIN" className="LoginBtn" />

            <Twitter type="submit" value="Connect with Twitter" className="twitter" />
            <TwitterLogo src={twitter} alt="Twitter logo" className="TwitterLogo" />
            <Facebook type="submit" value="Connect with Facebook" className="Facebook" />
            <FacebookLogo src={facebook} alt="Facebook logo" className="FacebookLogo" />
        </FormInner>
    </form>
    )
}

export default LoginForm;