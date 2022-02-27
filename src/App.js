import { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Nav from "./Nav";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
      <Nav/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
