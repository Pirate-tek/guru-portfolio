import React from 'react';
import './Publications.css';

const Publications = () => {
    const publications = [
        {
            type: 'Patent',
            title: 'Eyewear Integrated Mental Health Monitoring System Using Multimodal Sensors and Artificial Intelligence-Based Emotional Feedback',
            authors: ['Dr. E. B. Priyanka', 'Guru Prasath A', 'et al.'],
            meta: {
                label: 'Indian Patent Application',
                number: '202541064743',
                date: 'July 2025'
            },
            description: 'A wearable mental health monitoring system integrating multimodal physiological sensors and AI-driven emotional feedback for real-time stress and anxiety regulation.',
            link: '#',
            linkText: 'View Patent'
        },
        {
            type: 'Publication',
            title: 'Integrating Humanoid NAO V6 Robot for Food Serving Application',
            authors: ['Dr. T. T. Tamilarasi', 'Guru Prasath A', 'et al.'],
            meta: {
                publishedIn: '3rd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT 2025)',
                pages: '1029-1034',
                doi: '10.1109/IDCIOT64235.2025.10914950',
                date: 'July 2025'
            },
            description: 'Demonstrates the integration of a humanoid NAO V6 robot for autonomous food serving, focusing on human–robot interaction and service automation.',
            link: '#',
            linkText: 'View DOI'
        }
    ];

    return (
        <section id="publications" className="section publications-section">
            <div className="container">
                <h2 className="section-title">Patents & Publications</h2>
                <div className="publications-list">
                    {publications.map((item, index) => (
                        <div key={index} className="publication-card">
                            <div className="publication-header">
                                <span className={`publication-type type-${item.type.toLowerCase()}`}>{item.type}</span>
                                <span className="publication-date">{item.meta.date}</span>
                            </div>

                            <h3 className="publication-title">{item.title}</h3>

                            <div className="publication-authors">
                                {item.authors.map((author, idx) => (
                                    <span key={idx} className={author === 'Guru Prasath A' ? 'author-highlight' : ''}>
                                        {author}{idx < item.authors.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </div>

                            <div className="publication-meta">
                                {item.type === 'Patent' ? (
                                    <>
                                        <div className="meta-item">
                                            <span className="meta-label">Application No:</span> {item.meta.number}
                                        </div>
                                        <div className="meta-item">
                                            <span className="meta-label">Type:</span> {item.meta.label}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="meta-item full-width">
                                            <span className="meta-label">Published In:</span> {item.meta.publishedIn}
                                        </div>
                                        <div className="meta-row">
                                            <div className="meta-item">
                                                <span className="meta-label">Pages:</span> {item.meta.pages}
                                            </div>
                                            <div className="meta-item">
                                                <span className="meta-label">DOI:</span> {item.meta.doi}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <p className="publication-description">{item.description}</p>

                            <a href={item.link} className="publication-link">{item.linkText} &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
