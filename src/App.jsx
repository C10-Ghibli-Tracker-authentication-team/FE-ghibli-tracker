import React from 'react';
import Home from "./pages/Home";
import Account from "./pages/Account";
import Register from "./components/LoginComponents/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarArrow from "./components/NavbarComponents/NavbarArrow";
import NavbarHome from "./components/NavbarComponents/NavbarHome";
import NavbarFilter from "./components/NavbarComponents/NavbarFilter";
import NavbarSearch from "./components/NavbarComponents/NavbarSearch";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/account" element={<NavbarArrow />} />
            <Route path="/home" element={<NavbarHome />} />
            <Route path="/filter" element={<NavbarFilter />} />
            <Route path="/search" element={<NavbarSearch />} />
          </Routes>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        <Routes>
          <Route path="/account" element={<NavbarArrow />} />
          <Route path="/movie/:id" element={<NavbarArrow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
