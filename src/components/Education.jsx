import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            type: 'education',
            title: 'B.E. Mechatronics Engineering',
            institution: '[Your College Name]',
            duration: '3rd Year',
            description: 'Focusing on Robotics, Control Systems, and Embedded Systems.'
        },
        {
            type: 'education',
            title: 'BS in Electronic Systems',
            institution: 'IIT Madras',
            duration: 'Ongoing',
            description: 'Rigorous coursework in Electronic Systems and Data Science.'
        },
        {
            type: 'experience',
            title: 'Robotics Intern',
            institution: '[Company Name]',
            duration: '[Duration]',
            description: 'Worked on developing autonomous navigation algorithms for mobile robots.'
        },
        {
            type: 'achievement',
            title: 'Hackathon Winner',
            institution: '[Competition Name]',
            duration: '[Date]',
            description: 'Secured 1st place for building an innovative IoT solution for smart agriculture.'
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title">Journey & Milestones</h2>
                <div className="timeline">
                    {educationData.map((item, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <span className={`timeline-tag ${item.type}`}>{item.type}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-institution">{item.institution}</h4>
                                <span className="timeline-duration">{item.duration}</span>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
