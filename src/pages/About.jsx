import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our website and mission.</p>
      </header>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create interactive, fast, and user-friendly web
          applications using React and modern web technologies.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Highly interactive UI components</li>
          <li>Fast single-page applications</li>
          <li>Clean and modern design</li>
          <li>Easy to navigate with React Router</li>
        </ul>
      </section>

    
    </div>
  );
}

export default About;
