import React from 'react';

const Footer = ({ name, contact }) => (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{name.split(' ').map(n => n[0]).join('')}</h3>
                    <p className="text-gray-400 max-w-xs">Creating digital experiences that are both beautiful and functional. Focused on clean code and user-centric design.</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
                        <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
                    <div className="flex space-x-4">
                        <a href={contact.github} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={contact.linkedin} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={contact.twitter} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={contact.dribbble} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all" aria-label="Dribbble" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-dribbble"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
