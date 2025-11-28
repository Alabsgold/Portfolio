import React from 'react';

const CaseStudyModal = ({ project, closeModal }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
        <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-gray-700 relative" onClick={e => e.stopPropagation()}>
            <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
                    <button onClick={closeModal} className="text-gray-400 hover:text-white text-3xl transition-colors">&times;</button>
                </div>

                <div className="mb-6">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-xl font-bold text-white mb-2">Overview</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <h3 className="text-xl font-bold text-white mb-2">Case Study</h3>
                    <p className="text-gray-300 whitespace-pre-line">{project.caseStudy}</p>
                </div>

                <div className="mt-8 flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-dark-text px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors">Live Demo</a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-700 transition-colors">View Code</a>
                </div>
            </div>
        </div>
    </div>
);

export default CaseStudyModal;
