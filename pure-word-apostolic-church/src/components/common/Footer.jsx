import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pure Word Apostolic Church</h3>
          <p className="footer-description">
            A beacon of hope and faith in Ogembo Town, Kisii, Kenya. 
            We are committed to spreading God's word and serving our community.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://youtube.com" className="social-link" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about/mission">Our Mission</Link></li>
            <li><Link to="/about/vision">Our Vision</Link></li>
            <li><Link to="/about/history">Our History</Link></li>
            <li><Link to="/about/values">Our Values</Link></li>
            <li><Link to="/about/strategy">Our Strategy</Link></li>
            <li><Link to="/about/faith">Statement of Faith</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Ministries</h3>
          <ul className="footer-links">
            <li><Link to="/ministries/adults">Adult Ministry</Link></li>
            <li><Link to="/ministries/youth">Youth Fellowship</Link></li>
            <li><Link to="/ministries/children">Children's Church</Link></li>
            <li><Link to="/ministries/men">Men's Fellowship</Link></li>
            <li><Link to="/ministries/women">Women's Ministry</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FiMapPin />
              <span>Ogembo Town, Kisii County, Kenya</span>
            </div>
            <div className="contact-item">
              <FiPhone />
              <span>+254 712 345 678</span>
            </div>
            <div className="contact-item">
              <FiMail />
              <span>info@purewordchurch.org</span>
            </div>
          </div>
          <div className="service-times-footer">
            <h4>Service Times</h4>
            <p>Sunday: 9:00 AM - 12:00 PM</p>
            <p>Wednesday Bible Study: 6:00 PM</p>
            <p>Friday Prayer: 5:30 AM</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Pure Word Apostolic Church. All Rights Reserved.</p>
        <p className="footer-disclaimer">
          "Therefore go and make disciples of all nations..." - Matthew 28:19
        </p>
      </div>
    </footer>
  );
};

export default Footer;