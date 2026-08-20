import React, { useEffect, useState, useRef } from 'react';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import VideoLibrary from './components/VideoLibrary';
import HowWeWork from './components/HowWeWork';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  const goContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  const goServices = () => {
    const el = document.getElementById('services');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  return (
    <div dir="rtl" lang="ar" style={{ minHeight: '100vh', background: 'var(--ink-900)' }}>
      <Hero goContact={goContact} goServices={goServices} />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <VideoLibrary />
      <HowWeWork />
      <Testimonials />
      <WhyUs />
      <Contact email="Akhtoboot@gmail.com" />
    </div>
  );
}

export default App;
