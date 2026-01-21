import React from 'react';
import './Achievements.css';
// Import generated images
// Note: In a real app, these would be imported from assets. 
// For this environment, we assume they are available or we use the generated paths.
// Since the generated images are in the artifacts folder, we need to move them to assets or reference them correctly.
// For now, I will assume they are moved to src/assets/achievements/ or similar. 
// However, since I cannot move files easily to src/assets without `run_command` which might be restricted or complex,
// I will use the absolute paths to the artifacts for this demo, or better, I will use the `file://` protocol if allowed, 
// but React might not like that.
// A better approach for this environment is to assume they are in `src/assets` and I will copy them there.
// Placeholder imports for now, assuming I will move them.
import iim1 from '../assets/iim_new.jpg';
import iim2 from '../assets/iim2_new.jpg';
import forge1 from '../assets/forge1_new.png';
import forge2 from '../assets/forge2_new.jpg';

const Achievements = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const achievements = [
        {
            title: 'Design Impact Movement',
            prize: 'Awarded ₹50,000',
            organizer: 'Organized by TITAN in collabration with IIM Calcutta',
            date: 'July 2025',
            description: 'Mental Health Monitoring Glass',
            images: [iim1, iim2]
        },
        {
            title: 'Think Wild Ideathon',
            prize: 'Awarded ₹10,000',
            organizer: 'Organized by Hosur Forest Division in collabration with FORGE',
            date: 'March 2024',
            description: 'Banraw',
            images: [
                { src: forge1, style: { objectPosition: '20% center' } },
                forge2
            ]
        }
    ];

    const openLightbox = (img) => {
        // Handle both string and object image formats
        const imgSrc = typeof img === 'string' ? img : img.src;
        setSelectedImage(imgSrc);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Notable Achievements</h2>
                <div className="achievements-list">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-content">
                                <h3 className="achievement-title">{item.title}</h3>
                                <div className="achievement-prize">{item.prize}</div>
                                <div className="achievement-organizer">{item.organizer}</div>
                                <div className="achievement-description">{item.description}</div>
                                <div className="achievement-date">{item.date}</div>
                            </div>
                            <div className="achievement-gallery">
                                {item.images.map((imgItem, idx) => {
                                    const isObject = typeof imgItem === 'object' && imgItem !== null;
                                    const src = isObject ? imgItem.src : imgItem;
                                    const style = isObject ? imgItem.style : {};

                                    return (
                                        <div key={idx} className="achievement-image-wrapper" onClick={() => openLightbox(imgItem)}>
                                            <img
                                                src={src}
                                                alt={`${item.title} ${idx + 1}`}
                                                loading="lazy"
                                                style={style}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                        <img src={selectedImage} alt="Full size" className="lightbox-image" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
