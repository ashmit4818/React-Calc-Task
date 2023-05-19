/* eslint-disable no-eval */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
import logo from "./logo.svg";
import { evaluate } from "mathjs";

const Calculator = () => {
  // setting the state hook for display of the calculator to display dynamic content
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = (value) => {
    // Updating state hook every time user inputs a key
    setDisplayValue(displayValue + value);
  };

  const handleCalculate = () => {
    try {
      // used evaluate method from math.js library
      const result = evaluate(displayValue);
      setDisplayValue(result);
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const handleClear = () => {
    // resetting the state
    setDisplayValue("");
  };

  return (
    <div className="container">
      <div className="text-center">
        {/* react logo */}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="calculator mx-auto">
        <div className="display">{displayValue}</div>
        <div className="btnrow row">
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("7")}
            >
              7
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("8")}
            >
              8
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("9")}
            >
              9
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("/")}
            >
              /
            </button>
          </div>
        </div>
        <div className="btnrow row">
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("4")}
            >
              4
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("5")}
            >
              5
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("6")}
            >
              6
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("*")}
            >
              *
            </button>
          </div>
        </div>
        <div className="btnrow row">
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("1")}
            >
              1
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("2")}
            >
              2
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("3")}
            >
              3
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("-")}
            >
              -
            </button>
          </div>
        </div>
        <div className="btnrow row">
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("0")}
            >
              0
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick(".")}
            >
              .
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-success" onClick={handleCalculate}>
              =
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClick("+")}
            >
              +
            </button>
          </div>
        </div>
        <div className="btnrow row">
          <div className="col-12">
            <button className="btn btn-danger" onClick={handleClear}>
              C
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
