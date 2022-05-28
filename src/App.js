import React,{useEffect} from 'react';
import './index.css';
import Home from './views/landing/Home';
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Events from './Components/Events';
import Team from './Components/Team';
import Navbar from './Components/BasicComponents/Navbar';
import Footer from './Components/BasicComponents/Footer';
import Error from './Components/Error';
import Registration from './Components/Registration';
import Login from './views/login/Login';
import Profile from './views/profile/Profile';
import SmallFooter from './Components/footers/SmallFooter';


function App() {
  return (
    <div className="App bg-[#eff0f3]">
      {/* <ScrollToTop> */}

        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/events" element={<Events/>}></Route>
          <Route exact path="/gallery" element={<Events/>}></Route>
          <Route exact path="/team" element={<Team/>}></Route>
          <Route exact path="/register" element={<Registration/>}></Route>
          <Route exact path="/error" element={<Error/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>

        </Routes>

        {/* <Footer /> */}
        <SmallFooter />
      {/* </ScrollToTop> */}

    </div>
  );
}

export default App;
