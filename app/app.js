import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout"; 
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Program from "./Program";
import Course from "./Course";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
          <Routes>    
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
		  <Route path="Contact" element={<Contact />} />
		  <Route path="Program" element={<Program />} />
		  <Route path="Course" element={<Course />} />		  
        </Route>		
      </Routes>
    </BrowserRouter>
  );
}

export default App;
