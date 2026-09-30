import React from 'react';
import './Landing.css'; // Optional: Import a CSS file for styling

const Landing = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to Our Landing Page</h1>
                <p>Your journey starts here!</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="landing-content">
                <h2>Features</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>
            <footer className="landing-footer">
                <p>footer ne mores</p>
            </footer>
        </div>
    );
};

export default Landing;