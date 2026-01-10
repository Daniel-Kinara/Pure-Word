import { FiBookOpen, FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './StatementOfFaith.css';

const StatementOfFaith = () => {
  const beliefs = [
    {
      title: 'The Bible',
      description: 'We believe the Bible, both Old and New Testaments, is the inspired, infallible, and authoritative Word of God. It is the supreme and final authority in all matters of faith and conduct.',
      reference: '2 Timothy 3:16-17; 2 Peter 1:20-21'
    },
    {
      title: 'The Trinity',
      description: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, each being fully God, equal in power and glory.',
      reference: 'Matthew 28:19; 2 Corinthians 13:14'
    },
    {
      title: 'Jesus Christ',
      description: 'We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, atoning death, bodily resurrection, ascension to heaven, and personal return in power and glory.',
      reference: 'John 1:1,14; Philippians 2:5-11'
    },
    {
      title: 'The Holy Spirit',
      description: 'We believe in the deity and personality of the Holy Spirit who convicts of sin, regenerates, indwells, guides, teaches, empowers believers for godly living and service.',
      reference: 'John 14:16-17; Acts 1:8'
    },
    {
      title: 'Salvation',
      description: 'We believe salvation is by grace alone through faith alone in Christ alone. It is a free gift of God, not by works, received through personal repentance and faith in Jesus Christ.',
      reference: 'Ephesians 2:8-9; Romans 10:9-10'
    },
    {
      title: 'The Church',
      description: 'We believe in the universal church, composed of all true believers, and the local church as God\'s primary instrument for worship, fellowship, discipleship, and mission.',
      reference: 'Ephesians 1:22-23; Acts 2:42-47'
    },
    {
      title: 'Ordinances',
      description: 'We believe in two ordinances: Baptism by immersion for believers as a testimony of salvation, and the Lord\'s Supper as a memorial of Christ\'s sacrifice.',
      reference: 'Matthew 28:19-20; 1 Corinthians 11:23-26'
    },
    {
      title: 'Last Things',
      description: 'We believe in the personal, visible return of Jesus Christ, the resurrection of the dead, final judgment, eternal joy of the righteous, and eternal punishment of the wicked.',
      reference: '1 Thessalonians 4:16-17; Revelation 20:11-15'
    }
  ];

  const doctrinalDistinctives = [
    {
      title: 'Apostolic Foundation',
      description: 'We uphold apostolic doctrine and practice as recorded in the New Testament.'
    },
    {
      title: 'Holiness Lifestyle',
      description: 'We emphasize holy living as essential to authentic Christian witness.'
    },
    {
      title: 'Spiritual Gifts',
      description: 'We believe all spiritual gifts are operative in the church today for edification.'
    },
    {
      title: 'Divine Healing',
      description: 'We believe in divine healing through prayer in accordance with God\'s will.'
    }
  ];

  return (
    <div className="faith-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Statement of Faith</h1>
          <p className="subtitle">Our foundational beliefs based on Scripture</p>
          <div className="breadcrumb">
            <Link to="/about"><FiArrowLeft /> Back to About</Link>
          </div>
        </div>
      </div>

      <div className="faith-content">
        <div className="faith-intro">
          <div className="faith-icon">
            <FiBookOpen />
          </div>
          <h2>What We Believe</h2>
          <p className="faith-text">
            Our Statement of Faith summarizes the essential Biblical doctrines that 
            form the foundation of our teaching and practice. These beliefs unite us 
            as a church family and guide our ministry.
          </p>
        </div>

        <div className="beliefs-section">
          <h3>Core Beliefs</h3>
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => (
              <div key={index} className="belief-card">
                <div className="belief-header">
                  <FiCheckCircle className="belief-icon" />
                  <h4>{belief.title}</h4>
                </div>
                <p className="belief-description">{belief.description}</p>
                <div className="belief-reference">
                  <strong>References:</strong> {belief.reference}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="distinctives-section">
          <h3>Doctrinal Distinctives</h3>
          <p className="section-intro">
            In addition to these core beliefs, we emphasize certain Biblical truths 
            that shape our particular ministry identity:
          </p>
          <div className="distinctives-grid">
            {doctrinalDistinctives.map((distinctive, index) => (
              <div key={index} className="distinctive-card">
                <h4>{distinctive.title}</h4>
                <p>{distinctive.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="doctrinal-basis">
          <h3>Doctrinal Basis</h3>
          <div className="basis-content">
            <div className="basis-point">
              <h4>Biblical Authority</h4>
              <p>All doctrine and practice must be grounded in and tested by Scripture.</p>
            </div>
            <div className="basis-point">
              <h4>Historical Orthodoxy</h4>
              <p>We affirm the historic Christian faith as expressed in the Apostles\' Creed.</p>
            </div>
            <div className="basis-point">
              <h4>Practical Application</h4>
              <p>True doctrine always leads to transformed lives and godly living.</p>
            </div>
          </div>
        </div>

        <div className="faith-application">
          <h3>Living Our Faith</h3>
          <div className="application-grid">
            <div className="application-item">
              <h4>Teaching</h4>
              <p>All teaching and preaching is grounded in these foundational truths.</p>
            </div>
            <div className="application-item">
              <h4>Discipleship</h4>
              <p>New believers are systematically taught these doctrines.</p>
            </div>
            <div className="application-item">
              <h4>Leadership</h4>
              <p>All leaders must affirm and model these beliefs.</p>
            </div>
            <div className="application-item">
              <h4>Unity</h4>
              <p>These core beliefs provide unity amidst diversity of background.</p>
            </div>
          </div>
        </div>

        <div className="faith-conclusion">
          <h3>Want to Learn More?</h3>
          <p>
            If you have questions about what we believe or would like to study these 
            doctrines more deeply, we\'d love to connect with you.
          </p>
          <div className="conclusion-actions">
            <Link to="/contact" className="btn-primary">Contact Our Pastors</Link>
            <Link to="/events" className="btn-secondary">Join Bible Study</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementOfFaith;