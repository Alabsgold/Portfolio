import React from 'react';

const About = ({ experience, education }) => (
    <section id="about" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
                    <picture>
                        <source srcSet="images/about.webp" type="image/webp" />
                        <source srcSet="images/about.jpg" type="image/jpeg" />
                        <img src="images/about.jpg" alt="About" className="rounded-lg shadow-xl relative z-10 w-full" loading="lazy" />
                    </picture>
                </div>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-2 text-light-text">About Me</h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-gray-400 mb-8 leading-relaxed">I'm a passionate frontend developer with years of experience creating modern web applications. My approach combines technical expertise with an eye for design to deliver exceptional user experiences.</p>

                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-light-text flex items-center">
                        <i className="fas fa-briefcase text-primary mr-3 text-xl"></i> Experience
                    </h3>
                    <div className="space-y-6 border-l-2 border-gray-700 pl-6 ml-2">
                        {experience.map((job, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark-bg"></div>
                                <h4 className="text-xl font-bold text-light-text">{job.title}</h4>
                                <p className="text-primary font-semibold mb-2 text-sm">{job.company} | {job.duration}</p>
                                <p className="text-gray-400 text-sm">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-4 text-light-text flex items-center">
                        <i className="fas fa-graduation-cap text-primary mr-3 text-xl"></i> Education
                    </h3>
                    <div className="border-l-2 border-gray-700 pl-6 ml-2">
                        <div className="relative">
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-dark-bg"></div>
                            <h4 className="text-xl font-bold text-light-text">{education.degree}</h4>
                            <p className="text-primary font-semibold">{education.university} - {education.year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
