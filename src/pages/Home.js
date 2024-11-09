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

const StaggeredFeatureCard = ({ icon, title, description, isRight }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref} 
      className={`staggered-feature-card ${inView ? 'visible' : ''} ${isRight ? 'right' : 'left'}`}
    >
      <div className="staggered-content">
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

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
        <title>Yale AI Alignment</title>
        <meta 
          name="description" 
          content="Dedicated to reducing catastrophic risks from advanced AI." 
        />
      </Helmet>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Yale AI Alignment</h1>
          <p className="hero-subtitle">Dedicated to reducing catastrophic risks from advanced AI.</p>
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
          Managing risks from advanced artificial intelligence is one of the most important problems of our time. 
          We are a community of researchers at Yale aimed at reducing these risks and steering the trajectory of AI development for the better. 
          </p>
          <div className="stats-grid">
            <FeatureCard 
              icon="🔬"
              title="Research"
              description="Our research efforts span a range of topics, from technical exploration to understanding societal dynamics around AI."
            />
            <FeatureCard 
              icon="📜"
              title="Policy"
              description="Crafting sound AI policy requires engagement at all levels—local, national, and international. We want to shape dialogue on campus towards responsible AI policies."
            />
            <FeatureCard 
              icon="📢"
              title="Outreach"
              description="Whether speaking to thousands about the possible future of AI, or casually conversing with a friend about its potential catastrophic risks, we 
              believe that all forms of outreach are important."
            />
          </div>
        </div>
      </section>

      <section className="features-section">
  <div className="container">
    <h2>What We Offer</h2>
    <div className="features-staggered">
      <StaggeredFeatureCard 
        icon="📚"
        title="Paper Readings"
        description="Weekly discussions of papers in AI alignment, helping members stay current with the latest research in the field"
        isRight={false}
      />
      <StaggeredFeatureCard 
        icon="👥"
        title="Introductory Fellowship"
        description="An 8-week program introducing key concepts in AI alignment, aimed at members wanting to build a strong foundation in the field while connecting with like-minded peers"
        isRight={true}
      />
      <StaggeredFeatureCard 
        icon="🎓"
        title="Speakers Series"
        description="Talks from leading researchers, practitioners, and thought leaders in AI alignment, offering unique insights on developments in the field"
        isRight={false}
      />
      <StaggeredFeatureCard 
        icon="🤝"
        title="Socials"
        description="Regular community gatherings to build connections, share ideas, and foster collaboration among members passionate about AI alignment"
        isRight={true}
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
          <p>Connect with fellow students passionate about AI alignment, attend exclusive events, and contribute to meaningful research and discussions that shape the future of AI development.</p>
          <div className="cta-buttons">
            <Link to="https://forms.gle/vmNG2pdZBcdwdU1X6" className="cta-button">YAIA Interest Form</Link>
            <Link to="/join" className="cta-button">YAIA Slack Community</Link>
          </div>
        </div>
      </section>
    </div>
  );
}



export default Home;