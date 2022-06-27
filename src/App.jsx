import React, { useState } from "react";
import Home from './pages/Home';
import Account from './pages/Account';
<<<<<<< HEAD
// import Auth from './pages/Login';
// import Auth from './components/LoginComponents/Auth';
import Login from './components/LoginComponents/Login';
import SingUp from './components/LoginComponents/SingUp';
=======
import Login from './pages/Login';
import Movie from './pages/Movie';
>>>>>>> 5a9f2a130bc4203498d1ef6af0f68f98a091f1a9
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarArrow from './components/NavbarComponents/NavbarArrow';
import NavbarHome from './components/NavbarComponents/NavbarHome';
import NavbarFilter from './components/NavbarComponents/NavbarFilter';
import NavbarSearch from './components/NavbarComponents/NavbarSearch';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={()=>setToken()} />
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/account' element={<NavbarArrow/>}/>
          <Route path='/' element={<NavbarHome/>}/>
          <Route path='/filter' element={<NavbarFilter/>}/>
          <Route path='/search' element={<NavbarSearch/>}/>
        </Routes>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />}/>
          <Route path="/account" element={<Account />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
