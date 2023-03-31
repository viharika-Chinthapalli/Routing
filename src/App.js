import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
