import React from 'react';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Movie from './pages/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarArrow from './components/NavbarComponents/NavbarArrow';
import NavbarHome from './components/NavbarComponents/NavbarHome';
import NavbarFilter from './components/NavbarComponents/NavbarFilter';
import NavbarSearch from './components/NavbarComponents/NavbarSearch';

function App() {
  // const [token, setToken] = useState();

  /*  // if(!token) {
  //   return <Login setToken={()=>setToken()} />
  // } */
  return (
    <>
      <Router>
        <Routes>
          <Route path='/account' element={<NavbarArrow />} />
          <Route path='/' element={<NavbarHome />} />
          <Route path='/filter' element={<NavbarFilter />} />
          <Route path='/search' element={<NavbarSearch />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
