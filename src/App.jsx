import Home from "./pages/Home";
import Account from "./pages/Account";
import Login from "./components/LoginComponents/Login";
import Movie from "./pages/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarArrow from "./components/NavbarComponents/NavbarArrow";
import NavbarHome from "./components/NavbarComponents/NavbarHome";
import NavbarFilter from "./components/NavbarComponents/NavbarFilter";
import NavbarSearch from "./components/NavbarComponents/NavbarSearch";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/account" element={<NavbarArrow />} />
            <Route path="/" element={<NavbarHome />} />
            <Route path="/filter" element={<NavbarFilter />} />
            <Route path="/search" element={<NavbarSearch />} />
          </Routes>

          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>

        <Routes>
          <Route path="/account" element={<NavbarArrow />} />
          <Route path="/movie/:id" element={<NavbarArrow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
