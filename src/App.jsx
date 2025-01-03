import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import StarryBackground from './components/StarryBackground';
import './App.css';

const App = () => (
  <div className="app">
    <StarryBackground />
    <Header />
    <main className="main-content">
      <Home />
    </main>
    <Footer />
  </div>
);

export default App;