import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Guru's ability to bridge the gap between complex robotics theory and practical implementation is outstanding. A true innovator.",
            author: "Dr. [Name]",
            role: "Professor, [University]"
        },
        {
            text: "Working with Guru on the drone project was inspiring. His dedication and creative problem-solving skills are top-notch.",
            author: "[Name]",
            role: "Teammate"
        },
        {
            text: "He doesn't just write code; he crafts solutions that have a real-world impact.",
            author: "[Name]",
            role: "Mentor"
        }
    ];

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <h2 className="section-title">Words That Stayed</h2>
                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{item.text}</p>
                            <div className="testimonial-author">
                                <h4>{item.author}</h4>
                                <span>{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
