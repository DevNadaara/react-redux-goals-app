import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
