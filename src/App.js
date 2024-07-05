import React from 'react';
import "./App.css";
import Header from './components/header/header'; // Assuming Header component file name is 'Header.js'
import Home from './components/home/Home'; // Corrected import path
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Startup from './components/startups/Startup';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact'; 
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Startup />
        <Qualification />
        <Work />
        <Contact />
        
      </main>
    </>
  );
}

export default App;

