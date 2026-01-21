import React from "react";
import "./WhyRobotics.css";

const WhyRobotics = () => {
    return (
        <section id="why-robotics" className="why-robotics-section">
            <div className="why-robotics-card">
                <div className="why-robotics-header">
                    <h2 className="why-robotics-title">Why Robotics</h2>
                    <div className="why-robotics-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 8V4H8" />
                            <rect x="4" y="8" width="16" height="12" rx="2" />
                            <path d="M2 14h2" />
                            <path d="M20 14h2" />
                            <path d="M15 13v2" />
                            <path d="M9 13v2" />
                        </svg>
                    </div>
                </div>
                <p className="why-robotics-text">
                    Captivated by realizing a machine can run, jump, parkour, 
                    even flip through the air left me astonished. How could a machine, 
                    made of metal and circuits, be trained to execute such tasks? 
                    How can they move autonomously? How can they differentiate objects? 
                    How can they understand the surrounding? The bombarded curiosity 
                    inside me grew into a  fascination with robotics and desire to work on developing 
                    the intelligence behind such machines.
                </p>
            </div>
        </section>
    );
};

export default WhyRobotics;
