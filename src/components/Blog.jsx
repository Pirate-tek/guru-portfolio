import React from 'react';
import './Blog.css';

const Blog = () => {
    const blogs = [
        {
            title: 'The ability to ask right questions will leads to actual progress',
            date: 'Jan 3rd 2026',
            category: 'Personal',
            excerpt: 'Know the Why When How.....'
        },

        {
            title: 'When the code frustates you, sketch the concept instead. The insight hides in shapes',
            date: 'Nov 29th 2025',
            category: 'Personal',
            excerpt: 'Step back from clutter, Clarity emerges......'
        },

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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
