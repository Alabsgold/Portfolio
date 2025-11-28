import React from 'react';

const Skills = ({ skills }) => (
    <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-2 text-light-text">My Skills</h2>
            <p className="text-gray-400 text-center mb-12">Technologies I work with</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover-lift border border-gray-700 hover:border-primary/30">
                        <h3 className="text-2xl font-bold mb-6 text-primary capitalize flex items-center">
                            {category === 'frontend' && <i className="fas fa-code mr-3"></i>}
                            {category === 'backend' && <i className="fas fa-server mr-3"></i>}
                            {category === 'design' && <i className="fas fa-paint-brush mr-3"></i>}
                            {category}
                        </h3>
                        <ul>
                            {skillList.map((skill, index) => (
                                <li key={index} className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-semibold text-light-text">{skill.name}</span>
                                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full animated-glow"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
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

export default Skills;
