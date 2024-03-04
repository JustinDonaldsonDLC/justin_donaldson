import './App.css';
import Header from './components/head';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import Education from './components/Education';

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}


export default App;
