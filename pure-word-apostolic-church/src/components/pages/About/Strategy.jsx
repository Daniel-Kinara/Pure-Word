import { FiTrendingUp, FiArrowLeft, FiTarget, FiUsers, FiGlobe, FiHome, FiBook } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Strategy.css';

const Strategy = () => {
  const strategicPillars = [
    {
      icon: <FiTarget />,
      title: 'Disciple Making',
      description: 'Systematic training for spiritual growth at all levels',
      objectives: [
        'Launch 10 new small groups',
        'Train 50 discipleship leaders',
        'Establish mentoring program'
      ]
    },
    {
      icon: <FiUsers />,
      title: 'Community Impact',
      description: 'Transforming our local community through service',
      objectives: [
        'Serve 1000 households annually',
        'Establish community resource center',
        'Launch job skills training'
      ]
    },
    {
      icon: <FiGlobe />,
      title: 'Mission Expansion',
      description: 'Extending our reach beyond our immediate context',
      objectives: [
        'Plant 3 new churches',
        'Support 5 missionaries',
        'Host regional conferences'
      ]
    },
    {
      icon: <FiHome />,
      title: 'Facility Development',
      description: 'Creating spaces that facilitate ministry and growth',
      objectives: [
        'Complete multipurpose hall',
        'Develop youth center',
        'Expand parking facilities'
      ]
    }
  ];

  const timeline = [
    {
      year: '2024',
      focus: 'Foundation Strengthening',
      initiatives: [
        'Leadership training program',
        'Small group multiplication',
        'Community needs assessment'
      ]
    },
    {
      year: '2025',
      focus: 'Outreach Expansion',
      initiatives: [
        'Launch community center',
        'Youth mentorship program',
        'Church planting initiative'
      ]
    },
    {
      year: '2026',
      focus: 'Consolidation & Growth',
      initiatives: [
        'Facility expansion',
        'Regional conference hosting',
        'Leadership multiplication'
      ]
    }
  ];

  return (
    <div className="strategy-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Our Strategy</h1>
          <p className="subtitle">Our roadmap for impact and growth (2024-2026)</p>
          <div className="breadcrumb">
            <Link to="/about"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="strategy-content">
        <div className="strategy-intro">
          <div className="strategy-icon">
            <FiTrendingUp />
          </div>
          <h2>Strategic Plan</h2>
          <p className="strategy-text">
            Our 3-year strategic plan provides a clear roadmap for advancing our mission 
            and vision. It outlines key priorities, measurable goals, and actionable steps 
            to guide our ministry efforts and resource allocation.
          </p>
        </div>

        <div className="strategy-overview">
          <h3>Strategic Overview</h3>
          <div className="overview-content">
            <div className="overview-item">
              <h4>Vision Alignment</h4>
              <p>Every initiative supports our vision of being a transformative community impacting Ogembo and beyond.</p>
            </div>
            <div className="overview-item">
              <h4>Resource Stewardship</h4>
              <p>Strategic allocation of people, finances, and facilities for maximum kingdom impact.</p>
            </div>
            <div className="overview-item">
              <h4>Measurable Outcomes</h4>
              <p>Clear metrics to track progress and ensure accountability in implementation.</p>
            </div>
          </div>
        </div>

        <div className="pillars-section">
          <h3>Strategic Pillars</h3>
          <div className="pillars-grid">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-objectives">
                  <h5>Key Objectives:</h5>
                  <ul>
                    {pillar.objectives.map((objective, i) => (
                      <li key={i}>
                        <FiTarget className="objective-icon" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3>Implementation Timeline</h3>
          <div className="timeline">
            {timeline.map((phase, index) => (
              <div key={index} className="timeline-phase">
                <div className="phase-header">
                  <div className="phase-year">{phase.year}</div>
                  <h4 className="phase-focus">{phase.focus}</h4>
                </div>
                <div className="phase-initiatives">
                  <h5>Key Initiatives:</h5>
                  <ul>
                    {phase.initiatives.map((initiative, i) => (
                      <li key={i}>{initiative}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="metrics-section">
          <h3>Success Metrics</h3>
          <div className="metrics-grid">
            <div className="metric">
              <div className="metric-value">75%</div>
              <div className="metric-label">Member Engagement</div>
            </div>
            <div className="metric">
              <div className="metric-value">1000+</div>
              <div className="metric-label">Community Served</div>
            </div>
            <div className="metric">
              <div className="metric-value">3</div>
              <div className="metric-label">New Churches Planted</div>
            </div>
            <div className="metric">
              <div className="metric-value">50</div>
              <div className="metric-label">Leaders Trained</div>
            </div>
          </div>
        </div>

        <div className="strategy-participation">
          <h3>Your Role in Our Strategy</h3>
          <p>
            Every member has a vital role to play in implementing our strategic plan. 
            Through prayer, participation, and partnership, we can achieve God's purposes together.
          </p>
          <div className="participation-options">
            <Link to="/ministries" className="btn-primary">Serve in Ministry</Link>
            <Link to="/events" className="btn-secondary">Join Training</Link>
            <a href="#prayer" className="btn-text">Prayer Commitment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;