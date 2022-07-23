import Home from './pages/Home';
import Account from './pages/Account';
import Login from './components/LoginComponents/Login';
import SignUp from './components/LoginComponents/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarArrow from './components/NavbarComponents/NavbarArrow';
import NavbarHome from './components/NavbarComponents/NavbarHome';
import NavbarFilter from './components/NavbarComponents/NavbarFilter';
import NavbarSearch from './components/NavbarComponents/NavbarSearch';
// ! import useToken from './components/LoginComponents/useToken';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/account' element={<NavbarArrow />} />
          <Route path='/movie/:id' element={<NavbarArrow />} />
          <Route path='/' element={<NavbarHome />} />
          <Route path='/filter' element={<NavbarFilter />} />
          <Route path='/search' element={<NavbarSearch />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
