import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Products from './components/Products';
import Applications from './components/Applications';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Products />
      <Applications />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
