import { FiHeart, FiArrowLeft, FiCheckCircle, FiTarget, FiUsers, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Values.css';

const Values = () => {
  const coreValues = [
    {
      icon: <FiTarget />,
      title: 'Biblical Authority',
      description: 'We submit to the absolute authority of Scripture in all matters of faith and practice.',
      verses: ['2 Timothy 3:16-17', 'Psalm 119:105']
    },
    {
      icon: <FiHeart />,
      title: 'Genuine Worship',
      description: 'We worship God in spirit and truth, offering our lives as living sacrifices.',
      verses: ['John 4:24', 'Romans 12:1']
    },
    {
      icon: <FiUsers />,
      title: 'Authentic Community',
      description: 'We cultivate genuine relationships, bearing one another\'s burdens and growing together.',
      verses: ['Acts 2:42-47', 'Galatians 6:2']
    },
    {
      icon: <FiGlobe />,
      title: 'Intentional Outreach',
      description: 'We actively share the Gospel and serve our community with compassion.',
      verses: ['Matthew 28:19-20', 'Mark 16:15']
    },
    {
      icon: <FiCheckCircle />,
      title: 'Spiritual Growth',
      description: 'We pursue continuous transformation into Christlikeness through discipleship.',
      verses: ['Ephesians 4:15', '2 Peter 3:18']
    },
    {
      icon: <FiHeart />,
      title: 'Excellence & Integrity',
      description: 'We do everything with excellence for God\'s glory, maintaining integrity in all things.',
      verses: ['Colossians 3:23-24', 'Proverbs 11:3']
    }
  ];

  const valuePractices = [
    {
      area: 'Worship Services',
      practices: [
        'Biblical preaching and teaching',
        'Heartfelt worship and prayer',
        'Celebration of communion',
        'Regular baptism services'
      ]
    },
    {
      area: 'Community Life',
      practices: [
        'Small group fellowship',
        'Accountability partnerships',
        'Hospitality and welcoming',
        'Conflict resolution with grace'
      ]
    },
    {
      area: 'Ministry Service',
      practices: [
        'Using gifts for serving',
        'Team-based ministry',
        'Training and equipping',
        'Mentoring relationships'
      ]
    },
    {
      area: 'Outreach',
      practices: [
        'Local evangelism',
        'Community service projects',
        'Global missions support',
        'Social justice advocacy'
      ]
    }
  ];

  return (
    <div className="values-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our Values</h1>
          <p className="subtitle">The principles that guide our church family</p>
          <div className="breadcrumb">
            <Link to="/about"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="values-content">
        <div className="values-intro">
          <div className="values-icon">
            <FiHeart />
          </div>
          <h2>What We Value</h2>
          <p className="values-text">
            Our values are the Biblical principles that shape our identity, guide our decisions, 
            and define how we live as a church community. They are not just ideals we admire, 
            but commitments we practice daily.
          </p>
        </div>

        <div className="core-values-section">
          <h3>Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p className="value-description">{value.description}</p>
                <div className="value-verses">
                  {value.verses.map((verse, i) => (
                    <span key={i} className="verse">{verse}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="practices-section">
          <h3>Values in Practice</h3>
          <p className="section-description">
            These are some practical ways our values come to life in our church:
          </p>
          <div className="practices-grid">
            {valuePractices.map((practice, index) => (
              <div key={index} className="practice-area">
                <h4>{practice.area}</h4>
                <ul className="practice-list">
                  {practice.practices.map((item, i) => (
                    <li key={i}>
                      <FiCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="values-application">
          <h3>Living Our Values</h3>
          <div className="application-points">
            <div className="application-point">
              <div className="point-number">01</div>
              <div className="point-content">
                <h4>Decision Making</h4>
                <p>Our values guide every decision, from ministry programs to financial stewardship.</p>
              </div>
            </div>
            <div className="application-point">
              <div className="point-number">02</div>
              <div className="point-content">
                <h4>Conflict Resolution</h4>
                <p>We handle disagreements with grace, truth, and love, seeking reconciliation.</p>
              </div>
            </div>
            <div className="application-point">
              <div className="point-number">03</div>
              <div className="point-content">
                <h4>Leadership Development</h4>
                <p>We train leaders who exemplify our values in character and competence.</p>
              </div>
            </div>
            <div className="application-point">
              <div className="point-number">04</div>
              <div className="point-content">
                <h4>Member Expectations</h4>
                <p>We encourage all members to embrace and practice these values in community.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-call-to-action">
          <h3>Embrace Our Values</h3>
          <p>These values shape who we are and how we serve. Join us in living them out together.</p>
          <div className="cta-buttons">
            <Link to="/ministries" className="btn-primary">Get Involved</Link>
            <Link to="/contact" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;