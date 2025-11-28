import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import { portfolioData } from './data/portfolio';

const App = () => {
  const [modalData, setModalData] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-dark-bg text-light-text font-sans selection:bg-primary selection:text-dark-text">
      <Header name={portfolioData.name} onNavigate={scrollToSection} />
      <main>
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          description={portfolioData.description}
        />
        <Projects
          projects={portfolioData.projects}
          setModalData={setModalData}
        />
        <Skills skills={portfolioData.skills} />
        <About
          experience={portfolioData.experience}
          education={portfolioData.education}
        />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />

      {modalData && (
        <CaseStudyModal
          project={modalData}
          closeModal={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default App;
