import { FiTarget, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Mission.css';

const Mission = () => {
  const missionPoints = [
    "To proclaim the pure Word of God without compromise",
    "To make disciples who make disciples",
    "To worship God in spirit and truth",
    "To serve our community with compassion",
    "To equip believers for effective ministry",
    "To foster authentic Christian fellowship"
  ];

  return (
    <div className="mission-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our Mission</h1>
          <p className="subtitle">Defining our purpose and calling</p>
          <div className="breadcrumb">
            <Link to="/"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="mission-content">
        <div className="mission-statement">
          <div className="mission-icon">
            <FiTarget />
          </div>
          <h2>Our Core Mission</h2>
          <p className="mission-text">
            "To preach the Gospel of Jesus Christ, make disciples of all nations, 
            and demonstrate God's love through compassionate service, 
            thereby transforming lives and communities for God's glory."
          </p>
        </div>

        <div className="mission-details">
          <div className="mission-section">
            <h3>What Drives Us</h3>
            <p>
              At Pure Word Apostolic Church, our mission is rooted in the Great Commission 
              given by Jesus Christ. We believe that every believer has a role to play in 
              spreading the Good News and making disciples. Our mission guides everything 
              we do - from our Sunday services to our community outreach programs.
            </p>
          </div>

          <div className="mission-section">
            <h3>Our Mission Points</h3>
            <div className="mission-points">
              {missionPoints.map((point, index) => (
                <div key={index} className="mission-point">
                  <FiCheckCircle className="check-icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-section">
            <h3>How We Live Our Mission</h3>
            <div className="mission-practices">
              <div className="practice-card">
                <h4>Biblical Teaching</h4>
                <p>Systematic exposition of Scripture in all services</p>
              </div>
              <div className="practice-card">
                <h4>Discipleship Programs</h4>
                <p>Structured mentoring and training for spiritual growth</p>
              </div>
              <div className="practice-card">
                <h4>Community Outreach</h4>
                <p>Regular programs to serve and bless our community</p>
              </div>
              <div className="practice-card">
                <h4>Global Missions</h4>
                <p>Supporting missionary work locally and internationally</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-call-to-action">
          <h3>Join Us in Fulfilling Our Mission</h3>
          <p>Whether through prayer, service, giving, or evangelism, there's a place for you.</p>
          <div className="cta-buttons">
            <Link to="/ministries" className="btn-primary">Get Involved</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;