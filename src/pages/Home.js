import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';
import '../styles/Home.css';
import WaveDivider from '../components/WaveDivider';

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`feature-card ${inView ? 'visible' : ''}`}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const EventPreviewCard = ({ date, title, description, link }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`event-preview-card ${inView ? 'visible' : ''}`}>
      <div className="event-date">{date}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="event-link">Learn More →</Link>
    </div>
  );
};

const EventsSkeleton = () => (
  <div className="events-preview-grid">
    <div className="event-preview-card skeleton">
      <div className="skeleton-line short"></div>
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line long"></div>
    </div>
    <div className="event-preview-card skeleton">
      <div className="skeleton-line short"></div>
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line long"></div>
    </div>
  </div>
);




function Home() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="home">
      <Helmet>
        <title>Yale AI Alignment - Shaping the Future of AI Safety</title>
        <meta 
          name="description" 
          content="Yale AI Alignment is dedicated to advancing responsible AI development through research, education, and community engagement." 
        />
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <h1>Shaping the Future of AI Safety</h1>
          <p className="hero-subtitle">Yale AI Alignment is dedicated to advancing responsible AI development through research, education, and community engagement.</p>
          <div className="hero-buttons">
            <Link to="https://forms.gle/vmNG2pdZBcdwdU1X6" className="primary-button">YAIA Interest Form</Link>
            <Link to="https://join.slack.com/t/yaleaialignment/shared_invite/zt-2tbqdofqr-AyCDedQdqxYtToi994IR6w" className="secondary-button">YAIA Community Slack</Link>
          </div>
        </div>
      </section>

      <section className="mission-section">
      
        <div className="container">
        <h2>Our Mission</h2>
          <p>
            We're committed to ensuring artificial intelligence remains beneficial to humanity through rigorous research and thoughtful discourse.
            To this end, we aim to provide three key resources to our members:
          </p>
          <div className="stats-grid">
          <FeatureCard 
              icon="🔬"
              title="Research"
              description="Our research efforts span a wide range of topics, from deep technical exploration to understanding AI’s societal impacts. 
              We believe every breakthrough, whether large or small, plays a vital role in shaping the future of AI safety and ethics."
            />
            <FeatureCard 
              icon="🔬"
              title="Policy"
              description="Crafting sound AI policy requires engagement at all levels—local, national, and international. 
              We work tirelessly to shape meaningful guidelines and regulations that ensure AI serves humanity’s best interests, now and in the future."
            />
            <FeatureCard 
              icon="🔬"
              title="Advocacy"
              description="Whether speaking to thousands about the possible future of AI, 
              or casually conversing with a friend about the small chance of the 'AI Apocalypse', 
              we believe that all forms of advocacy are important, and as such, we strive to promote all forms of it."
            />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
        <h2>What We Offer</h2>
          <div className="features-grid">
            <FeatureCard 
              icon="🔬"
              title="Paper Readings"
              description="..."
            />
            <FeatureCard 
              icon="👥"
              title="Introductory Fellowship"
              description="Building a vibrant community of students, researchers, and professionals interested in AI safety"
            />
            <FeatureCard 
              icon="🎓"
              title="Speakers Series"
              description="Offering workshops, seminars, and reading groups on key AI alignment concepts"
            />
            <FeatureCard 
              icon="🤝"
              title="Socials"
              description="Partnering with leading organizations and researchers in the field of AI safety"
            />
          </div>
        </div>
      </section>

      <section className="latest-events">
      <div className="container">
        <div className="coming-soon-wrapper">
          <h2 className="announcement-heading">Featured Events: Coming Soon</h2>
          <p className="announcement-text">We're preparing to launch our event series in 2025. Stay tuned for workshops, guest speakers, and more.</p>
          <div className="cta-wrapper">
            <a href="https://join.slack.com/t/yaleaialignment/shared_invite/zt-2tbqdofqr-AyCDedQdqxYtToi994IR6w" className="cta-button">Get Notified</a>
          </div>
        </div>
      </div>
    </section>
      <section className="cta-section"> 
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Be part of the movement to ensure AI benefits humanity</p>
          <Link to="https://forms.gle/vmNG2pdZBcdwdU1X6" className="cta-button">Interest Form</Link>
          <Link to="/join" className="cta-button">Join our Slack!</Link>
        
        </div>
      </section>
    </div>
  );
}


export default Home;