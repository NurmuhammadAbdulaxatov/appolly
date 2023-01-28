import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Components/Header";
import About from "./Components/About";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
