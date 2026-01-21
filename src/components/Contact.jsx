import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: 'error',
                message: 'EmailJS configuration is missing. Please check your .env file.'
            });
            setIsSending(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again later.'
                });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Let's Build Something Meaningful</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <p>
                            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="contact-details">
                            <a href="mailto:guruprasath.a003@gmail.com" className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <span>Gmail</span>
                            </a>
                            <a href="https://linkedin.com/in/guruprasath" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </div>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/guruprasath" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                </div>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {status && (
                            <div className={`form-status ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" className="btn" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
