import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile_new.png';

const Hero = () => {
    return (
        <section id="about" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Guru Prasath.A</h1>
                    <p className="hero-tagline">Mechatronics Engineer | Aspiring Robotics </p>
                    <div className="hero-description">
                        <p>
                            A curious, self-driven individual passionate about exploring Robotics and eager to apply learnt concepts, craving stimulation through challenges and valuing personal growth and a satisfied life.
                        </p>
                        <p className="hero-philosophy">
                            "Life is driven by desires and goals!!"
                        </p>
                    </div>
                    <div className="hero-actions">
                        <a href="#projects" className="btn">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Let's Connect</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="profile-image-container">
                        <img src={profilePic} alt="Guru Prasath" className="profile-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
