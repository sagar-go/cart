
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Nav from "./Nav";

function App() {
  return (
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
