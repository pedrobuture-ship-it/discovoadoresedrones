import React from 'react';
import './App.css';
import { ModelLoader } from './components/three/ModelLoader';
import { ModeTransition } from './components/ModeTransition';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { HowItWorks } from './components/sections/HowItWorks';
import { Expert } from './components/sections/Expert';
import { FinalCTA } from './components/sections/FinalCTA';
import { WhatsAppFloat } from './components/sections/WhatsAppFloat';
import { Footer } from './components/layout/Footer';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();
  
  return (
    <div className="App min-h-screen">
      <ModeTransition />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Expert />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ModelLoader />
    </div>
  );
}

export default App;
