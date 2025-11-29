import React from 'react';

const Projects = ({ projects, setModalData }) => (
    <section id="projects" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2 text-light-text">Featured Projects</h2>
            <p className="text-gray-400 text-center mb-12">Some of my recent work</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-primary/50 hover-lift group">
                        <div className="relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onClick={() => setModalData(project)} className="text-dark-text text-sm font-bold bg-primary px-4 py-2 rounded-full hover:bg-secondary transform hover:scale-105 transition-transform">View Case Study</button>
                                <a href={project.codeUrl} className="text-light-text text-sm font-bold bg-gray-900 border border-gray-700 px-4 py-2 rounded-full hover:bg-black transform hover:scale-105 transition-transform">View Code</a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-light-text">{project.title}</h3>
                            <p className="text-primary font-semibold mb-2 text-sm">{project.role}</p>
                            <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
