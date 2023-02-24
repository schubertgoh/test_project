import React, { Component } from "react";
import Login from './pages/Login'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from "./pages/Users";
import Items from "./pages/Items";


export default class App extends Component {

  render() {
    return (
      <Router>
      <div className="pt-20">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<Users />} />
          <Route path="/item" element={<Items/>} />
        </Routes>
      </div>
      </Router>
    );
  }
}
