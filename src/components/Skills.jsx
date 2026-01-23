import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'HANDY IN',
            skills: ['ROS2', 'C++', 'Python', 'Linux', 'Gazebo', 'Arduino', 'ESP', 'Raspberry Pi', 'PWM Control', 'Interfacing', 'Git', 'React', 'Debugging', 'Calibration']
        },
        {
            title: 'CORE COMPETENCY',
            skills: ['System Understanding', 'Design Thinking', 'Research', 'Storytelling', 'Team Player', 'Optimistic', 'Persistance']
        },
    ];


    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Arsenal</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
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
export default Skills;


