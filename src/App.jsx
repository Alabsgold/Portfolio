import React, { useState } from 'react';

// Single Source of Truth for all portfolio data
const portfolioData = {
  name: "Alabi Emmanuel",
  title: "Frontend Developer & UI Designer",
  description: "I create beautiful, functional digital experiences with a focus on user-centered design.",
  contact: {
    email: "emmaalabi31@gmail.com",
    phone: "+2347039960964",
    location: "Lagos State, Nigeria",
    github: "https://github.com/Alabsgold",
    linkedin: "https://ng.linkedin.com/in/femi-alabi-650078301",
    twitter: "https://x.com/Fem4Gold?t=YbRHzDKJz4athhElmNvddA&s=09",
    dribbble: "https://github.com/Alabsgold"
  },
  projects: [
    {
      title: "Modern E-commerce Platform",
      role: "Lead UI/UX, Component Architecture",
      description: "A full-featured online store with product filtering, cart functionality, and secure checkout.",
      image: "images/shopping.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
      caseStudy: "Detailed case study of the e-commerce platform..."
    },
    {
      title: "Task Management App",
      role: "Frontend Developer",
      description: "Productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "images/task.jpg",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "#",
      caseStudy: "Detailed case study of the task management app..."
    },
    {
      title: "Health & Fitness Dashboard",
      role: "Data Visualization Specialist",
      description: "Data visualization dashboard for tracking health metrics with interactive charts and progress reports.",
      image: "images/fitness.jpg",
      tags: ["D3.js", "React", "Chart.js"],
      liveUrl: "#",
      codeUrl: "#",
      caseStudy: "Detailed case study of the health & fitness dashboard..."
    }
  ],
  skills: {
    frontend: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React", level: 85 },
      { name: "Typescript", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Flask", level: 75 },
      { name: "Python", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "REST APIs", level: 85 }
    ],
    design: [
      { name: "UI/UX Design", level: 85 },
      { name: "Adobe PS", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Git", level: 85 },
      { name: "Webpack", level: 70 }
    ]
  },
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechSolutions Inc.",
      duration: "2021 - Present",
      description: "Lead development of client-facing applications, mentor junior developers, and collaborate with design teams."
    },
    {
      title: "UI Developer",
      company: "Digital Creations",
      duration: "2019 - 2021",
      description: "Implemented responsive designs and built reusable component libraries for various projects."
    }
  ],
  education: {
    degree: "B.S. in Computer Science",
    university: "University of Technology",
    year: 2025
  }
};

// Sub-components
const Header = ({ name, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    onNavigate(targetId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-dark-bg shadow-md fixed w-full z-20 border-b-2 border-primary">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="text-2xl font-bold text-primary">{name.split(' ').map(n => n[0]).join('')}</a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="text-light-text hover:text-primary">Home</a>
          <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')} className="text-light-text hover:text-primary">Projects</a>
          <a href="#skills" onClick={(e) => handleNavigation(e, 'skills')} className="text-light-text hover:text-primary">Skills</a>
          <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-light-text hover:text-primary">About</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="bg-primary text-dark-text px-4 py-2 rounded-full hover:bg-secondary">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-text hover:text-primary focus:outline-none z-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-dark-bg z-20 flex flex-col items-center justify-center space-y-6">
          <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="text-2xl text-light-text hover:text-primary">Home</a>
          <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')} className="text-2xl text-light-text hover:text-primary">Projects</a>
          <a href="#skills" onClick={(e) => handleNavigation(e, 'skills')} className="text-2xl text-light-text hover:text-primary">Skills</a>
          <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-2xl text-light-text hover:text-primary">About</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="text-2xl text-light-text hover:text-primary">Contact</a>
        </div>
      )}
    </header>
  );
};

const Hero = ({ name, title, description }) => (
  <section id="home" className="pt-24 bg-dark-bg">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-light-text mb-4">Hi, I'm <span className="text-primary animated-glow">{name}</span></h1>
        <h2 className="text-2xl md:text-3xl text-light-text mb-6">{title}</h2>
        <p className="text-lg text-gray-400 mb-8">{description}</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#projects" className="bg-primary text-dark-text px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-transform hover-lift">View My Work</a>
          <a href="#contact" className="bg-transparent text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-dark-text transition-transform hover-lift">Hire Me</a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <picture>
            <source srcSet="images/logo.webp" type="image/webp" />
            <source srcSet="images/logo.jpg" type="image/jpeg" />
            <img src="images/logo.jpg" alt={name} className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg animated-glow" />
          </picture>
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-accent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 z-0 opacity-20"></div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = ({ projects, setModalData }) => (
  <section id="projects" className="py-20 bg-dark-bg">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-2 text-light-text">Featured Projects</h2>
      <p className="text-gray-400 text-center mb-12">Some of my recent work</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-primary/50 hover-lift">
            <div className="relative">
              <picture>
                <source srcSet={`${project.image.replace('.jpg', '.webp')}`} type="image/webp" />
                <source srcSet={project.image} type="image/jpeg" />
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" loading="lazy" />
              </picture>
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center space-x-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => setModalData(project)} className="text-dark-text text-lg bg-primary px-4 py-2 rounded-full hover:bg-secondary">View Case Study</button>
                <a href={project.codeUrl} className="text-light-text text-lg bg-gray-900 px-4 py-2 rounded-full hover:bg-black">View Code (GitHub)</a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-light-text">{project.title}</h3>
              <p className="text-gray-400 font-semibold mb-2">{project.role}</p>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-700 text-light-text px-2 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudyModal = ({ project, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
    <div className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-full overflow-y-auto border-2 border-primary">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-light-text text-3xl">&times;</button>
        </div>
        <p className="text-gray-400">{project.caseStudy}</p>
      </div>
    </div>
  </div>
);

const Skills = ({ skills }) => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-2 text-light-text">My Skills</h2>
      <p className="text-gray-400 text-center mb-12">Technologies I work with</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover-lift">
            <h3 className="text-2xl font-bold mb-4 text-primary capitalize">{category}</h3>
            <ul>
              {skillList.map((skill, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-light-text">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full animated-glow" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = ({ experience, education }) => (
  <section id="about" className="py-20 bg-dark-bg">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <picture>
          <source srcSet="images/about.webp" type="image/webp" />
          <source srcSet="images/about.jpg" type="image/jpeg" />
          <img src="images/about.jpg" alt="About" className="rounded-lg shadow-lg" loading="lazy" />
        </picture>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2 text-light-text">About Me</h2>
        <p className="text-gray-400 mb-8">I'm a passionate frontend developer with years of experience creating modern web applications. My approach combines technical expertise with an eye for design to deliver exceptional user experiences.</p>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-light-text">Experience</h3>
          {experience.map((job, index) => (
            <div key={index} className="mb-6 pb-6 border-b border-gray-700">
              <h4 className="text-xl font-bold text-light-text">{job.title}</h4>
              <p className="text-primary font-semibold mb-1">{job.company} | {job.duration}</p>
              <p className="text-gray-400">{job.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-light-text">Education</h3>
          <h4 className="text-xl font-bold text-light-text">{education.degree}</h4>
          <p className="text-primary font-semibold">{education.university} - {education.year}</p>
        </div>
      </div>
    </div>
  </section>
);


const Contact = ({ contact }) => (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-light-text">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12">Have a project in mind? Let's talk!</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-envelope text-3xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-light-text">Email</h3>
                <p className="text-gray-400">{contact.email}</p>
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">Send a message</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <i className="fas fa-phone text-3xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-light-text">Phone</h3>
                <p className="text-gray-400">{contact.phone}</p>
                <a href={`tel:${contact.phone}`} className="text-primary hover:underline">Call me</a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center col-span-1 sm:col-span-2">
                <i className="fas fa-map-marker-alt text-3xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold mb-2 text-light-text">Location</h3>
                <p className="text-gray-400">{contact.location}</p>
                <a href="#" className="text-primary hover:underline">View on map</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-dark-text px-6 py-3 rounded-lg font-semibold hover:bg-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = ({ name, contact }) => (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-primary">{name.split(' ').map(n => n[0]).join('')}</h3>
            <p className="text-gray-400">Creating digital experiences that are both beautiful and functional.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#home" className="hover:text-primary">Home</a></li>
              <li className="mb-2"><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li className="mb-2"><a href="#skills" className="hover:text-primary">Skills</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href={contact.github} className="text-2xl hover:text-primary" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
              <a href={contact.linkedin} className="text-2xl hover:text-primary" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
              <a href={contact.twitter} className="text-2xl hover:text-primary" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>
              <a href={contact.dribbble} className="text-2xl hover:text-primary" aria-label="Dribbble" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Main App Component
const App = () => {
    const [modalData, setModalData] = useState(null);

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className="bg-dark-bg text-light-text">
        <Header name={portfolioData.name} onNavigate={scrollToSection} />
        <main>
          <Hero name={portfolioData.name} title={portfolioData.title} description={portfolioData.description} />
          <Projects projects={portfolioData.projects} setModalData={setModalData} />
          <Skills skills={portfolioData.skills} />
          <About experience={portfolioData.experience} education={portfolioData.education} />
          <Contact contact={portfolioData.contact} />
        </main>
        <Footer name={portfolioData.name} contact={portfolioData.contact} />
        {modalData && <CaseStudyModal project={modalData} closeModal={() => setModalData(null)} />}
      </div>
    );
  };

export default App;
