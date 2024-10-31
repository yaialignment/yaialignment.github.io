import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/WaveDivider';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About YAIA</h1>
          <p className="lead">Advancing AI safety through research, education, and collaboration at Yale University</p>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Scientific Rigor</h3>
              <p>Commitment to high-quality research and evidence-based approaches in AI safety</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Foster partnerships and knowledge sharing within the AI safety community</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Long-term Thinking</h3>
              <p>Focus on sustainable and beneficial AI development for future generations</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Education</h3>
              <p>Empower students with knowledge and skills in AI alignment</p>
            </div>
          </div>
        </div>
      </section>
   
     


      <section className="join-cta">
        <div className="container">
          <h2>Join Our Mission</h2>
          <p>Help shape the future of AI development at Yale. Whether you're a student, 
          researcher, or faculty member, there's a place for you in our community.</p>
          <Link to="https://join.slack.com/t/yaleaialignment/shared_invite/zt-2tbqdofqr-AyCDedQdqxYtToi994IR6w" className="cta-button">Get Involved</Link>
        </div>
      </section>
    </div>
  );
}

export default About;