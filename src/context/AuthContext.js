import React from "react";
import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    

    const navigate = useNavigate()
    
    let loginUser = async (e)=> {
        console.log(e);
        e.preventDefault()
         let response = await fetch('https://estudio-ghibli-2022.herokuapp.com/login', {
             method:'POST',
             headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             },
             body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
         })
         let data = await response.json()
         console.log('data: ', data)
    }
      

    let contextData = {
        loginUser:loginUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
