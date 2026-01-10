import { FiClock, FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './History.css';

const History = () => {
  const timelineEvents = [
    {
      year: '2012',
      title: 'The Beginning',
      description: 'Pure Word Apostolic Church was founded by Pastor John and a small group of 15 believers meeting in a rented house in Ogembo Town.',
      icon: <FiUsers />
    },
    {
      year: '2014',
      title: 'First Church Building',
      description: 'Purchased our first piece of land and constructed a temporary structure that could accommodate 100 worshippers.',
      icon: <FiMapPin />
    },
    {
      year: '2016',
      title: 'Ministry Expansion',
      description: 'Launched our first community outreach program and established the Youth and Women ministries.',
      icon: <FiStar />
    },
    {
      year: '2018',
      title: 'New Sanctuary',
      description: 'Completed construction of our current main sanctuary building with capacity for 500 worshippers.',
      icon: <FiCalendar />
    },
    {
      year: '2020',
      title: 'COVID-19 Response',
      description: 'Established online services and community support programs during the pandemic, reaching thousands.',
      icon: <FiUsers />
    },
    {
      year: '2022',
      title: '10th Anniversary',
      description: 'Celebrated 10 years of ministry with over 400 active members and multiple satellite ministries.',
      icon: <FiStar />
    },
    {
      year: 'Present',
      title: 'Continued Growth',
      description: 'Currently running 5 active ministries, community development projects, and planning for a new education center.',
      icon: <FiCalendar />
    }
  ];

  const founders = [
    {
      name: 'Pastor John Maina',
      role: 'Founding Pastor',
      description: 'Served as senior pastor since inception with over 20 years of ministry experience.'
    },
    {
      name: 'Elder Sarah Nyambura',
      role: 'Co-Founder',
      description: 'Pioneered the women\'s ministry and community outreach programs.'
    },
    {
      name: 'Deacon James Ochieng',
      role: 'Founding Member',
      description: 'Led the construction committee and currently heads the men\'s fellowship.'
    }
  ];

  return (
    <div className="history-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our History</h1>
          <p className="subtitle">A journey of faith and transformation since 2012</p>
          <div className="breadcrumb">
            <Link to="/about"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="history-content">
        <div className="history-intro">
          <div className="history-icon">
            <FiClock />
          </div>
          <h2>Our Story</h2>
          <p className="history-text">
            From humble beginnings in a small rented house to becoming a beacon of hope in 
            Ogembo Town, Pure Word Apostolic Church's journey is a testament to God's faithfulness. 
            For over a decade, we have remained committed to spreading the Gospel and serving our community.
          </p>
        </div>

        <div className="timeline-section">
          <h3>Our Journey Timeline</h3>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <div className="timeline-icon">{event.icon}</div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="founders-section">
          <h3>Our Founding Team</h3>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-avatar">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4>{founder.name}</h4>
                <p className="founder-role">{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="milestones-section">
          <h3>Key Milestones</h3>
          <div className="milestones-grid">
            <div className="milestone">
              <div className="milestone-number">500+</div>
              <div className="milestone-label">Active Members</div>
            </div>
            <div className="milestone">
              <div className="milestone-number">50+</div>
              <div className="milestone-label">Community Projects</div>
            </div>
            <div className="milestone">
              <div className="milestone-number">5</div>
              <div className="milestone-label">Active Ministries</div>
            </div>
            <div className="milestone">
              <div className="milestone-number">10+</div>
              <div className="milestone-label">Years of Service</div>
            </div>
          </div>
        </div>

        <div className="history-testimony">
          <h3>Continuing the Legacy</h3>
          <p>
            Today, Pure Word Apostolic Church continues to grow and impact lives. 
            We remain committed to our founding vision while adapting to meet the needs 
            of our changing community. Our history is not just about where we've been, 
            but about the foundation we're building for future generations.
          </p>
          <div className="testimony-actions">
            <Link to="/about/vision" className="btn-primary">Our Vision for the Future</Link>
            <Link to="/events" className="btn-secondary">Join Our Next Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;