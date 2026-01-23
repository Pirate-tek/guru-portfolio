import React from 'react';
import { FaRobot, FaCogs, FaEye } from 'react-icons/fa';
import './AOI.css';

const AOI = () => {
    const aoiCategories = [
        {
            title: 'Kinematics',
            description: '"Love for physics drew me into exploring Mechanics"',
        },
        {
            title: 'Control Systems',
            description: '"Passion to build intelligent system "',
        },
        {
            title: 'Robot Perception',
            description: '"Lured by the curiosity to understand how robots able to see and interpret the world."',
        },
    ];

    return (
        <section id="aoi" className="section aoi-section">
            <div className="container">
                <h2 className="section-title">Areas of Interest</h2>
                <div className="aoi-grid">
                    {aoiCategories.map((category, index) => (
                        <div key={index} className="aoi-card">
                            <h3 className="aoi-title">{category.title}</h3>
                            <p className="aoi-description">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AOI;
