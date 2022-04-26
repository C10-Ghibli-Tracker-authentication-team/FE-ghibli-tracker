import ReactStars from "react-rating-stars-component";
import React from "react";
import { Rate } from "../Styles/CardsStyles";

const Stars = {
  size: 40,
  count: 7,
  isHalf: false,
  value: 4,
  color: "blue",
  activeColor: "#ffd700",
  onChange: newValue => {
    console.log(`Example 3: new value is ${newValue}`);
  }
};

export default function App() {
  return (
    <Rate className="App">
      <ReactStars {...Stars } />
    </Rate>
  );
}