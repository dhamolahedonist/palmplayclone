import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Agent from "./pages/Agent";
import Press from "./pages/Press";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/agent" element={<Agent />} />
      </Routes>
      <Routes>
        <Route path="/press" element={<Press />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
