import React,{useEffect} from 'react';
import './index.css';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Events from './Components/Events';
import Team from './Components/Team';
import About from './Components/About';
import Navbar from './Components/BasicComponents/Navbar';
import Footer from './Components/BasicComponents/Footer';





function App() {
  return (
    <div className="App bg-[#eff0f3]">
      {/* <ScrollToTop> */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/gallery" element={<Events />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/contact" element={<Events />}></Route>
        </Routes>

        <Footer />
      {/* </ScrollToTop> */}

    </div>
  );
}

export default App;
