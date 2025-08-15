import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';
import './Styles/Transitions.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SwitchTransition>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </div>
  );
};

export default App;