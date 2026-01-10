import { FiUsers, FiHome, FiTarget, FiHeart, FiArrowRight } from 'react-icons/fi';
import { FaChurch, FaPrayingHands, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MinistriesSummary.css';

const MinistriesSummary = () => {
  const ministries = [
    {
      id: 1,
      title: "Adult Ministry",
      description: "Spiritual growth and fellowship for adults of all ages through Bible studies, prayer groups, and discipleship programs.",
      icon: <FiUsers />,
      color: "#3498db",
      link: "/ministries/adults",
      stats: "150+ Members"
    },
    {
      id: 2,
      title: "Youth Fellowship",
      description: "Engaging the youth in faith through worship, mentorship, and activities that build character and community.",
      icon: <FaChurch />,
      color: "#9b59b6",
      link: "/ministries/youth",
      stats: "80+ Active Youth"
    },
    {
      id: 3,
      title: "Children's Church",
      description: "Nurturing young souls in God's word through age-appropriate teaching, fun activities, and foundational discipleship.",
      icon: <FiHome />,
      color: "#2ecc71",
      link: "/ministries/children",
      stats: "60+ Children"
    },
    {
      id: 4,
      title: "Men's Fellowship",
      description: "Building godly men through accountability, Bible study, and practical workshops on faith, family, and leadership.",
      icon: <FaPrayingHands />,
      color: "#2c3e50",
      link: "/ministries/men",
      stats: "70+ Men"
    },
    {
      id: 5,
      title: "Women's Ministry",
      description: "Empowering women in faith through prayer, fellowship, and programs that address unique spiritual needs.",
      icon: <FaHandsHelping />,
      color: "#e74c3c",
      link: "/ministries/women",
      stats: "120+ Women"
    },
    {
      id: 6,
      title: "Outreach & Missions",
      description: "Serving our community and supporting global missions through practical assistance and evangelism.",
      icon: <FiTarget />,
      color: "#f39c12",
      link: "/ministries/outreach",
      stats: "10+ Projects"
    }
  ];

  return (
    <div className="ministries-summary">
      <div className="section-header">
        <h2>Our Ministries & Fellowships</h2>
        <p className="section-subtitle">Discover opportunities to grow, serve, and connect</p>
      </div>

      <div className="ministries-stats">
        <div className="stat-item">
          <div className="stat-number">6</div>
          <div className="stat-label">Active Ministries</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">480+</div>
          <div className="stat-label">Active Participants</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">25+</div>
          <div className="stat-label">Weekly Activities</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Volunteers Serving</div>
        </div>
      </div>

      <div className="ministries-grid">
        {ministries.map(ministry => (
          <div key={ministry.id} className="ministry-card">
            <div className="ministry-header">
              <div className="ministry-icon" style={{ color: ministry.color }}>
                {ministry.icon}
              </div>
              <div className="ministry-stats-badge">
                {ministry.stats}
              </div>
            </div>
            
            <h3>{ministry.title}</h3>
            <p className="ministry-description">{ministry.description}</p>
            
            <div className="ministry-footer">
              <Link to={ministry.link} className="ministry-link">
                Learn More <FiArrowRight />
              </Link>
              <button className="interest-btn">
                <FiHeart /> I'm Interested
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="ministries-cta">
        <div className="cta-content">
          <div className="cta-icon">
            <FiUsers />
          </div>
          <div className="cta-text">
            <h3>Find Your Place to Serve</h3>
            <p>
              Every member has unique gifts to contribute. Explore our ministries 
              and discover where God is calling you to serve.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/ministries" className="btn-primary">
              Explore All Ministries
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Ministry Leaders
            </Link>
          </div>
        </div>
      </div>

      <div className="ministry-benefits">
        <h3>Benefits of Joining a Ministry</h3>
        <div className="benefits-grid">
          <div className="benefit">
            <FiHeart className="benefit-icon" />
            <h4>Spiritual Growth</h4>
            <p>Deepen your faith through regular fellowship and study</p>
          </div>
          <div className="benefit">
            <FiUsers className="benefit-icon" />
            <h4>Meaningful Relationships</h4>
            <p>Build authentic Christian friendships and support systems</p>
          </div>
          <div className="benefit">
            <FiTarget className="benefit-icon" />
            <h4>Purposeful Service</h4>
            <p>Use your gifts to make a difference in others' lives</p>
          </div>
          <div className="benefit">
            <FaPrayingHands className="benefit-icon" />
            <h4>Prayer Support</h4>
            <p>Experience the power of collective prayer and encouragement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistriesSummary;