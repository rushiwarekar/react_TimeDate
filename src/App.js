import React from "react";
import "./App.css"
import { Add, sub, mul, divi } from "./Calc";

function App() {
  return (
    <>
      <ul>
        <li>The sum of two numbers is :{Add(4, 5)}</li>
        <li>The sub of two numbers is :{sub(45, 39)}</li>
        <li>The mul of two numbers is :{mul(45, 39)}</li>
        <li>The divi of two numbers is :{divi(45, 39)}</li>
      </ul>
    </>
  );
}

export default App;