import React, { useState } from 'react';

const Contact = ({ contact }) => {
    const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            // Reset form after success
            e.target.reset();

            // Clear success message after 3 seconds
            setTimeout(() => setFormStatus(null), 5000);
        }, 1500);

        // NOTE: To make this functional, you can use a service like Formspree.
        // Replace the URL in action="https://formspree.io/f/YOUR_FORM_ID" 
        // and remove this handleSubmit function if using native form submission.
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2 text-light-text">Get In Touch</h2>
                <p className="text-gray-400 text-center mb-12">Have a project in mind? Let's talk!</p>
                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:border-primary/50 transition-colors">
                                <i className="fas fa-envelope text-3xl text-primary mb-4"></i>
                                <h3 className="text-xl font-bold mb-2 text-light-text">Email</h3>
                                <p className="text-gray-400 text-sm mb-2">{contact.email}</p>
                                <a href={`mailto:${contact.email}`} className="text-primary hover:underline font-medium">Send a message</a>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700 hover:border-primary/50 transition-colors">
                                <i className="fas fa-phone text-3xl text-primary mb-4"></i>
                                <h3 className="text-xl font-bold mb-2 text-light-text">Phone</h3>
                                <p className="text-gray-400 text-sm mb-2">{contact.phone}</p>
                                <a href={`tel:${contact.phone}`} className="text-primary hover:underline font-medium">Call me</a>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center col-span-1 sm:col-span-2 border border-gray-700 hover:border-primary/50 transition-colors">
                                <i className="fas fa-map-marker-alt text-3xl text-primary mb-4"></i>
                                <h3 className="text-xl font-bold mb-2 text-light-text">Location</h3>
                                <p className="text-gray-400">{contact.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email</label>
                                <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">Subject</label>
                                <input type="text" id="subject" placeholder="Subject" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Message</label>
                                <textarea id="message" placeholder="Your Message" rows="5" className="w-full px-4 py-3 border border-gray-700 bg-gray-900 text-light-text rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-primary text-dark-text px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {formStatus === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>

                            {formStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-lg text-center text-sm">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
