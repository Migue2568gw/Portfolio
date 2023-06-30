import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bio } from '../biografia/Bio';
import Portafolio from '../portafolio/Portafolio';
import Header from '../header/Header'
import { NavBar } from '../navBar/NavBar'


export const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home localitation="#Home"  />}/>
        <Route path="/biografia" element={<Bio localitation="#Bio" />} />
        <Route path="/portafolio" element={<Portafolio localitation="#portfolio"/>} />
      </Routes>
    </Router>
  );
};

const Home = ({ localitation }) => {
  const initialNav = NavBar({ localitation });
  const initialNavRef = useRef(null);
  initialNavRef.current = initialNav;
  return 
};

export default App;
