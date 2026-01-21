import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Placeholder images - in a real app these would be imported or URLs
    const items = [
        { title: 'Robotics Lab', type: 'Work' },
        { title: 'Travel', type: 'Life' },
        { title: 'Conference', type: 'Event' },
        { title: 'Workshop', type: 'Work' },
    ];

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <h2 className="section-title">Gallery</h2>
                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <div key={index} className="gallery-item">
                            <div className="polaroid">
                                <div className="polaroid-image">
                                    {/* Placeholder for image */}
                                    <div className="image-placeholder"></div>
                                </div>
                                <div className="polaroid-caption">
                                    <p>{item.title}</p>
                                    <span>{item.type}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
