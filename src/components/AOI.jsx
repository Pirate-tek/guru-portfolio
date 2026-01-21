import React from 'react';
import './Skills.css';

const AOI = () => {
    const aoiCategories = [
        {
            title: 'Mechanics',
            skills: ['Mobile Robots', 'Manipulators', 'SLAM', 'Navigation', 'Control Systems']
        },
        {
            title: 'Digital Circuits',
            skills: ['Full Stack Web', 'Embedded Systems', 'System Architecture', 'Open Source']
        },
        {
            title: 'Control System',
            skills: ['Computer Vision', 'Deep Learning', 'Sensor Fusion', 'Object Detection']
        },

    ];

    return (
        <section id="aoi" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Areas of Interest</h2>
                <div className="skills-grid">
                    {aoiCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AOI;
