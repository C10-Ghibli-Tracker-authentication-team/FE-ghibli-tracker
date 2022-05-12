import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar-logic';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {<Navbar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
