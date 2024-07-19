import { useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Header setActiveSection={setActiveSection} />
        <main className="mt-8">
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
};

export default Index;