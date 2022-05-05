import React from 'react';
import './index.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from './Components/Events';
import Navbar from './Components/BasicComponents/Navbar';
import Footer from './Components/BasicComponents/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<Events />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/perks" element={<Events />}></Route>
          <Route exact path="/gallery" element={<Events />}></Route>
          <Route exact path="/team" element={<Events />}></Route>
          <Route exact path="/contact" element={<Events />}></Route>


        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
