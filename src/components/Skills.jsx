import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Software',
            skills: ['Python', 'C++', 'ROS2', 'Linux', 'Gazebo', 'Git', 'React', 'Debugging']
        },
        {
            title: 'Hardware',
            skills: ['Arduino', 'ESP', 'Raspberry Pi', 'Protocols', 'Sensors', 'Calibration', 'Actuators']
        },
        {
            title: 'Cognitive',
            skills: ['Design Thinking', 'System Analysis', 'Research', 'Storytelling']
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


