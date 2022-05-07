import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Account from './pages/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
