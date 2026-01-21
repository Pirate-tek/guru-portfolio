import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogs = [
        {
            title: 'The Future of Swarm Robotics',
            date: 'October 15, 2023',
            category: 'Robotics',
            excerpt: 'Exploring how decentralized systems can revolutionize agriculture and disaster relief.'
        },
        {
            title: 'Finding Meaning in the Machine',
            date: 'September 28, 2023',
            category: 'Personal',
            excerpt: 'Reflections on the intersection of philosophy and artificial intelligence.'
        },
        {
            title: 'Building a Digital Twin with ROS2',
            date: 'August 10, 2023',
            category: 'Technical',
            excerpt: 'A step-by-step guide to simulating real-world manufacturing environments.'
        }
    ];

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <h2 className="section-title">Thought Sparks</h2>
                <div className="blog-grid">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{blog.category}</span>
                                    <span className="blog-date">{blog.date}</span>
                                </div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <a href="#" className="read-more">Read Article &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
