import React from 'react';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    const internships = [
        {
            role: 'ROS2 Developer Internship',
            company: 'RobotoAI',
            duration: 'Mar - May 2026',
            summary: 'Worked on advanced ROS2 fleet coordination, custom behavior tree planning systems, and closed-loop control systems. Focused on middleware and low-level control systems integration.',
            subProjects: [
                {
                    title: 'RMF Fleet Simulation System',
                    problemStatement: 'Refactoring single-robot simulation stack to support multi-robot namespaces and fleet coordination.',
                    techStack: ['RMF', 'Nav2', 'ROS2', 'URDF'],
                    outcome: 'Handled TF, namespaced URDFs, topics, and Nav2 parameters for 5 robots, integrating them with RMF via a custom fleet adapter.',
                    fullDetails: {
                        description: 'Refactored a single robot simulation stack to handle a 5-robot fleet\'s TF tree, namespaced URDFs, topics, and Nav2 parameters. Implemented multi-robot coordination using a custom fleet adapter bridging RMF and Nav2 based on traffic maps.',
                        role: 'ROS2 / RMF Developer',
                        outcomes: ['Refactored single-robot stack to multi-robot namespace', 'Enabled multi-robot navigation using RMF traffic maps', 'Implemented custom RMF fleet adapter'],
                        experienceGained: ['RMF (Robotics Middleware Framework)', 'Multi-robot coordinate systems', 'Fleet management']
                    }
                },
                {
                    title: 'Custom BT Action Plugin',
                    problemStatement: 'Elevating navigation pause/resume behaviors to a preemptible action server condition.',
                    techStack: ['Behavior Trees', 'ROS2', 'C++'],
                    outcome: 'Designed a custom Behavior Tree node to hold navigation and give mission planners external control over task execution.',
                    fullDetails: {
                        description: 'Designed and implemented a custom ROS2 Behavior Tree action node (WaitActionServerCondition) that allows pause/resume tasks to be managed as preemptible actions.',
                        role: 'C++ Developer',
                        outcomes: ['Implemented custom Behavior Tree nodes', 'Returned RUNNING state to pause navigation', 'Empowered mission planners with external navigation control'],
                        experienceGained: ['Behavior Trees in ROS2', 'Preemptible action servers', 'Task scheduling']
                    }
                },
                {
                    title: 'ROS 2 Control Bridge',
                    problemStatement: 'Interfacing ros2_control with a custom differential drive setup on a DC encoder motor.',
                    techStack: ['ros2_control', 'C++', 'Kinematics', 'Joint Control'],
                    outcome: 'Co-developed a position-based controller plugin with closed-loop feedback.',
                    fullDetails: {
                        description: 'Co-developed a custom ros2_control position-based differential-drive controller plugin in C++ for a DC encoder motor.',
                        role: 'Control Systems Developer',
                        outcomes: ['Co-developed ros2_control position-based plugin', 'Implemented inverse kinematics for wheel angles calculation', 'Integrated closed-loop joint feedback'],
                        experienceGained: ['ros2_control plugin development', 'Inverse kinematics', 'Closed-loop control systems']
                    }
                }
            ]
        },
        {
            role: 'Internship - ROS2 Developer',
            company: 'Karthikesh Robotics',
            duration: 'Oct - Dec 2025',
            summary: ' This internship was the result of consistent effort to self-learn ROS2 by the passion to become a robotics developer. The earned opportunity to contribute at KKR provided me right path with structure to develop my knowledge further. Being greatful to the stepping stone of my career.',
            subProjects: [
                {
                    title: 'BUMPY - Indoor AMR',
                    problemStatement: 'Indoor autonomous navigation with custom hardware control.',
                    techStack: ['Nav2', 'LiDAR', 'SLAM', 'Raspberry Pi'],
                    outcome: 'Developed a full-stack ROS2 solution for indoor navigation including SLAM, path planning, and custom hardware interfacing.',
                    fullDetails: {
                        description: 'Designed and deployed a ROS2-based differential drive mobile robot capable of indoor autonomous navigation.',
                        role: 'Full Stack Robotics Developer',
                        outcomes: ['Built complete ROS2 navigation stack', 'Implemented SLAM and path planning', 'Integrated custom hardware with ros2_control'],
                        experienceGained: ['Custom ROS2 hardware control', 'TF tree management']
                    }
                },
                {
                    title: 'Web Control Interface',
                    problemStatement: 'Remote monitoring and control of ROS2 robots via web interface.',
                    techStack: ['ROS2', 'React', 'Java', 'WebSocket'],
                    outcome: 'Created a web-based control interface for real-time robot monitoring and command execution.',
                    fullDetails: {
                        description: 'Built a web interface for remote control and monitoring of ROS2 robots using React and WebSocket communication.',
                        outcomes: ['Developed real-time web control interface', 'Integrated WebSocket communication with ROS2'],
                        experienceGained: ['Web-based robotics control', 'Real-time data streaming']
                    }
                }
            ]
        }
    ];

    const additionalProjects = [
        {
            title: 'NEERIN THARAM',
            description: 'Personalized Water Quality Monitoring Kit. Portable, low-cost testing for rural areas.',
            techStack: ['Embedded Systems', 'Sensors', 'Colorimetry'],
            outcome: 'Created a web-based control interface for real-time robot monitoring and command execution.',
            details: {
                role: 'Team Lead',
                context: 'Smart India Hackathon 2024',
                outcomes: ['Designed colorimetric detection', 'Built portable hardware unit'],
                experienceGained: ['Prototyping', 'Cross-functional Leadership']
            }
        },
        {
            title: 'CORTIVUE',
            description: 'Wearable Mental Health Monitoring Glass. Real-time stress detection and adaptive regulation.',
            techStack: ['ESP32', 'Python', 'OpenCV', 'AI'],
            details: {
                role: 'Inventor & Lead Developer',
                context: 'Personal Innovation Project',
                outcomes: ['Multi-sensor physiological data collection', 'Adaptive haptic feedback'],
                experienceGained: ['Sensor Fusion', 'Embedded-AI Pipelines']
            }
        },
        {
            title: 'WAKENS',
            description: 'IAQ-Based Smart Fan & AC Control System. Autonomous indoor air quality monitoring.',
            techStack: ['IoT', 'Cloud', 'Voice Assistants'],
            details: {
                role: 'IoT Developer',
                context: 'SIH Internal Selection',
                outcomes: ['Real-time PM2.5/CO2 monitoring', 'Voice control integration'],
                experienceGained: ['IoT System Design', 'Cloud Integration']
            }
        }
    ];

    const openModal = (project, type = 'standard', currentInternship = null) => {
        // Normalize data for modal
        const modalData = type === 'internship' ? {
            title: project.title,
            context: (currentInternship ? currentInternship.company : '') + ' - ' + (currentInternship ? currentInternship.role : ''),
            role: project.fullDetails.role,
            techStack: project.techStack,
            outcomes: project.fullDetails.outcomes,
            experienceGained: project.fullDetails.experienceGained,
            description: project.fullDetails.description,
            isInternship: true
        } : {
            title: project.title,
            context: project.details.context,
            role: project.details.role,
            techStack: project.techStack,
            outcomes: project.details.outcomes,
            experienceGained: project.details.experienceGained,
            description: project.description,
            isInternship: false
        };

        setSelectedProject(modalData);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Creations & Experiments</h2>

                {/* Internship Cards */}
                {internships.map((internship, intIdx) => (
                    <div key={intIdx} className="internship-card">
                        <div className="internship-header">
                            <div className="internship-info">
                                <span className="internship-role">{internship.role}</span>
                                <h3 className="internship-company">{internship.company}</h3>
                            </div>
                            <span className="internship-duration">{internship.duration}</span>
                        </div>
                        <p className="internship-summary">{internship.summary}</p>

                        <div className="internship-panels">
                            {internship.subProjects.map((sub, index) => (
                                <div
                                    key={index}
                                    className="internship-panel"
                                    onClick={() => openModal(sub, 'internship', internship)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(sub, 'internship', internship)}
                                >
                                    <h4 className="panel-title">{sub.title}</h4>
                                    <p className="panel-problem">{sub.problemStatement}</p>
                                    <div className="panel-tech">
                                        {sub.techStack.map((tech, idx) => (
                                            <span key={idx} className="tech-dot">{tech}</span>
                                        ))}
                                    </div>
                                    <p className="panel-outcome">{sub.outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Additional Projects Grid */}
                <div className="projects-grid additional-projects">
                    {additionalProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            onClick={() => openModal(project)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(project)}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.techStack.map((tag, idx) => (
                                        <span key={idx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="project-modal-close" onClick={closeModal}>&times;</button>
                        <h3 className="modal-title">{selectedProject.title}</h3>
                        <p className="modal-context">{selectedProject.context}</p>

                        <div className="modal-section">
                            <h4>DESCRIPTION</h4>
                            <p>{selectedProject.description}</p>
                        </div>

                        {/* Conditionally hide Role & Responsibility for internship subprojects */}
                        {!selectedProject.isInternship && (
                            <div className="modal-section">
                                <h4>Role &amp; Responsibility</h4>
                                <p>{selectedProject.role}</p>
                            </div>
                        )}

                        <div className="modal-section">
                            <h4>Key Technologies</h4>
                            <div className="project-tags">
                                {selectedProject.techStack.map((tag, idx) => (
                                    <span key={idx} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h4>Outcomes / Impact</h4>
                            <ul>
                                {selectedProject.outcomes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h4>Experience Gained</h4>
                            <ul>
                                {selectedProject.experienceGained.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
