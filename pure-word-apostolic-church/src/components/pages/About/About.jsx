import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FiTarget, FiEye, FiClock, FiHeart, FiTrendingUp, FiBookOpen,
  FiArrowRight, FiHome, FiInfo
} from 'react-icons/fi';
import Mission from './Mission';
import Vision from './Vision';
import History from './History';
import Values from './Values';
import Strategy from './Strategy';
import StatementOfFaith from './StatementOfFaith';
import './About.css';

const About = () => {
  const location = useLocation();
  
  const aboutLinks = [
    { path: '/about/mission', icon: <FiTarget />, title: 'Our Mission', description: 'Our purpose and calling' },
    { path: '/about/vision', icon: <FiEye />, title: 'Our Vision', description: 'Where we are heading' },
    { path: '/about/history', icon: <FiClock />, title: 'Our History', description: 'Our journey so far' },
    { path: '/about/values', icon: <FiHeart />, title: 'Our Values', description: 'What we believe in' },
    { path: '/about/strategy', icon: <FiTrendingUp />, title: 'Our Strategy', description: 'How we achieve our goals' },
    { path: '/about/faith', icon: <FiBookOpen />, title: 'Statement of Faith', description: 'Our core beliefs' },
  ];

  return (
    <div className="about-page">
      {location.pathname === '/about' ? (
        <>
          <div className="page-header">
            <div className="page-header-content">
              <h1>About Pure Word Apostolic Church</h1>
              <p className="subtitle">Discover who we are, what we believe, and where we're going</p>
              <div className="breadcrumb">
                <Link to="/"><FiHome /> Home</Link>
                <FiArrowRight />
                <span><FiInfo /> About Us</span>
              </div>
            </div>
          </div>

          <div className="about-intro">
            <div className="about-intro-text">
              <h2>Welcome to Our Family</h2>
              <p>
                For over a decade, Pure Word Apostolic Church has been a beacon of hope and 
                spiritual nourishment in Ogembo Town, Kisii, Kenya. We are more than just 
                a church - we are a family united by faith, love, and a common purpose.
              </p>
              <p>
                Our journey began with a small group of believers gathered in a home, 
                and through God's grace, we have grown into a vibrant community impacting 
                lives and transforming our region through the power of God's Word.
              </p>
            </div>
            <div className="about-intro-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years of Service</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Ministries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Community Projects</div>
              </div>
            </div>
          </div>

          <div className="about-links-grid">
            {aboutLinks.map((link) => (
              <Link to={link.path} key={link.path} className="about-link-card">
                <div className="about-link-icon">{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <div className="about-link-arrow">
                  <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>

          <div className="about-call-to-action">
            <h2>Join Us on This Journey</h2>
            <p>
              Whether you're seeking spiritual growth, meaningful connections, 
              or opportunities to serve, there's a place for you here at Pure Word.
            </p>
            <div className="cta-buttons">
              <Link to="/events" className="btn-primary">
                Join Our Next Service
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/history" element={<History />} />
          <Route path="/values" element={<Values />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/faith" element={<StatementOfFaith />} />
        </Routes>
      )}
    </div>
  );
};

export default About;