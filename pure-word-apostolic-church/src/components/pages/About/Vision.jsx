import { FiEye, FiArrowLeft, FiTrendingUp, FiGlobe, FiUsers, FiTarget } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Vision.css';

const Vision = () => {
  const visionGoals = [
    {
      icon: <FiTrendingUp />,
      title: "Spiritual Growth",
      description: "Double our discipleship programs in the next 5 years"
    },
    {
      icon: <FiGlobe />,
      title: "Community Impact",
      description: "Reach 10,000 households with community development projects"
    },
    {
      icon: <FiUsers />,
      title: "Church Planting",
      description: "Plant 5 new churches in neighboring towns"
    },
    {
      icon: <FiTarget />,
      title: "Youth Empowerment",
      description: "Equip 500 youth with life and leadership skills annually"
    }
  ];

  return (
    <div className="vision-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our Vision</h1>
          <p className="subtitle">Where God is leading us</p>
          <div className="breadcrumb">
            <Link to="/about"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="vision-content">
        <div className="vision-statement">
          <div className="vision-icon">
            <FiEye />
          </div>
          <h2>Our Vision Statement</h2>
          <p className="vision-text">
            "To be a transformative, Spirit-filled community that impacts Ogembo Town, 
            Kisii County, and beyond with the love and power of Jesus Christ, 
            raising generations of devoted disciples who change their world."
          </p>
        </div>

        <div className="vision-details">
          <div className="vision-section">
            <h3>Our Vision for the Future</h3>
            <p>
              We envision a church where every member is actively growing in their faith, 
              using their gifts to serve, and reaching others with the Gospel. Our vision 
              extends beyond our walls to transform our community through education, 
              economic empowerment, and social justice initiatives.
            </p>
          </div>

          <div className="vision-goals">
            <h3>Strategic Goals (2024-2029)</h3>
            <div className="goals-grid">
              {visionGoals.map((goal, index) => (
                <div key={index} className="goal-card">
                  <div className="goal-icon">{goal.icon}</div>
                  <h4>{goal.title}</h4>
                  <p>{goal.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="vision-section">
            <h3>Core Focus Areas</h3>
            <div className="focus-areas">
              <div className="focus-area">
                <h4>Worship & Prayer</h4>
                <p>Establishing a 24/7 prayer ministry and enhancing worship experiences</p>
              </div>
              <div className="focus-area">
                <h4>Discipleship & Training</h4>
                <p>Developing comprehensive training programs for all age groups</p>
              </div>
              <div className="focus-area">
                <h4>Community Development</h4>
                <p>Addressing education, healthcare, and economic needs in our community</p>
              </div>
              <div className="focus-area">
                <h4>Youth & Family</h4>
                <p>Strengthening families and empowering the next generation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="vision-partnership">
          <h3>Partner With Our Vision</h3>
          <p>Your prayers, participation, and support help bring this vision to reality.</p>
          <div className="partnership-options">
            <Link to="/events" className="btn-primary">Join Our Services</Link>
            <Link to="/ministries" className="btn-secondary">Serve in Ministries</Link>
            <a href="#pray" className="btn-text">Pray for Our Vision</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;