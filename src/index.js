import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieApp from "./Film/index";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="movie-details" element={<MovieApp />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
