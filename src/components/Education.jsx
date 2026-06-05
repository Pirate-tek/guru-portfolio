import React from 'react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            type: 'education',
            title: 'B.E. Mechatronics Engineering',
            institution: 'Kongu Engineering College',
            duration: '2022 - 2026',
            description: 'Focusing on Robotics, Control Systems, and Embedded Systems.'
        },
        {
            type: 'education',
            title: 'BS in Electronic Systems',
            institution: 'Indian Institute of Technology, Madras',
            duration: '2023 - 2030 (Ongoing)',
            description: 'Coursework in Electronic Systems, Data Science, and Application Development.'
        },
        {
            type: 'experience',
            title: 'ROS2 Developer Intern',
            institution: 'RobotoAI, Coimbatore',
            duration: 'Mar - May 2026',
            description: 'Developed multi-robot simulation stacks with RMF fleet adapters, designed custom preemptible Behavior Tree action nodes, and built ros2_control DC motor plugins.'
        },
        {
            type: 'experience',
            title: 'ROS2 Developer Intern',
            institution: 'Karthikesh Robotics, Chennai',
            duration: 'Oct - Dec 2025',
            description: 'Built a ROS2 differential drive Indoor AMR from scratch. Fused wheel odometry/IMU sensors and integrated SLAM mapping with Nav2.'
        },
        {
            type: 'achievement',
            title: 'Titan Design Impact Award',
            institution: 'TITAN & IIM Calcutta',
            duration: 'Jul 2025',
            description: 'Awarded ₹50,000 for the project SMART MENTAL HEALTH MONITORING GLASS (CORTIVUE).'
        },
        {
            type: 'achievement',
            title: 'Think Wild Ideathon Winner',
            institution: 'Hosur Forest Division & FORGE',
            duration: 'Mar 2024',
            description: 'Awarded ₹10,000 for the idea to develop sustainable banana fiber products.'
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
