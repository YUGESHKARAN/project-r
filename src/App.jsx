import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";;

import Home from "./components/Home";
function App() {
  return (
    <div className="min-h-screen relative bg-white font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
