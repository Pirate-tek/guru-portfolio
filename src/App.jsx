import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyRobotics from './components/WhyRobotics';
import Skills from './components/Skills';
import AOI from './components/AOI';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Education from './components/Education';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
//import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ChatWidget from './components/Chat/ChatWidget';

import KanjiBackground from './components/KanjiBackground';

function App() {
  return (
    <div className="app">
      <KanjiBackground />
      <Navbar />
      <main>
        <Hero />
        <WhyRobotics />
        <Skills />
        <AOI />
        <Projects />
        <Achievements />
        <Publications />
        <Blog />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
//Testimonials
//Education

export default App;
