import React,{useEffect} from 'react';
import './index.css';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Events from './Components/Events';
import Team from './Components/Team';
import Navbar from './Components/BasicComponents/Navbar';
import Footer from './Components/BasicComponents/Footer';
import Error from './Components/Error';
import Registration from './Components/Registration';


function App() {
  return (
    <div className="App bg-[#eff0f3]">
      {/* <ScrollToTop> */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/events" element={<Events/>}></Route>
          <Route exact path="/gallery" element={<Events/>}></Route>
          <Route exact path="/team" element={<Team/>}></Route>
          <Route exact path="/register" element={<Registration/>}></Route>
          <Route exact path="/error" element={<Error/>}></Route>

        </Routes>

        <Footer />
      {/* </ScrollToTop> */}

    </div>
  );
}

export default App;
