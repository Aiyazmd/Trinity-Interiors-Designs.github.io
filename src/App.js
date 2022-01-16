import React from 'react';
import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Contact from './Components/Contacts';



function App() {
  return (
    <BrowserRouter>
     <Header sticky="top" />
    <Routes>
    <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
