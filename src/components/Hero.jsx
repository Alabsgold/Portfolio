import React from 'react';

const Hero = ({ name, title, description }) => (
    <section id="home" className="pt-24 bg-dark-bg min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-light-text mb-4">
                    Hi, I'm <span className="text-primary animated-glow">{name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-light-text mb-6">{title}</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">{description}</p>
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
                        <img
                            src="images/logo.jpg"
                            alt={name}
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg animated-glow relative z-10"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </picture>
                    <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-accent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 z-0 opacity-20 blur-3xl"></div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;
