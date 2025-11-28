import React, { useState } from 'react';

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
                <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="text-2xl font-bold text-primary">
                    {name.split(' ').map(n => n[0]).join('')}
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#home" onClick={(e) => handleNavigation(e, 'home')} className="text-light-text hover:text-primary transition-colors">Home</a>
                    <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')} className="text-light-text hover:text-primary transition-colors">Projects</a>
                    <a href="#skills" onClick={(e) => handleNavigation(e, 'skills')} className="text-light-text hover:text-primary transition-colors">Skills</a>
                    <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-light-text hover:text-primary transition-colors">About</a>
                    <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="bg-primary text-dark-text px-4 py-2 rounded-full hover:bg-secondary transition-colors">Contact</a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-light-text hover:text-primary focus:outline-none z-30"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
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

export default Header;
