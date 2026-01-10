import { FiX, FiHome, FiInfo, FiCalendar, FiImage, FiMail, FiUsers, FiBookOpen } from 'react-icons/fi';
import { FaChurch, FaPrayingHands } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FaChurch />
            <div>
              <h2>Pure Word Church</h2>
              <p>Ogembo, Kisii</p>
            </div>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <FiX />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-link" onClick={onClose}>
            <FiHome /> Home
          </Link>
          
          <div className="sidebar-group">
            <div className="sidebar-group-title">
              <FiInfo /> About Us
            </div>
            <Link to="/about/mission" className="sidebar-link" onClick={onClose}>
              Our Mission
            </Link>
            <Link to="/about/vision" className="sidebar-link" onClick={onClose}>
              Our Vision
            </Link>
            <Link to="/about/history" className="sidebar-link" onClick={onClose}>
              Our History
            </Link>
            <Link to="/about/values" className="sidebar-link" onClick={onClose}>
              Our Values
            </Link>
            <Link to="/about/strategy" className="sidebar-link" onClick={onClose}>
              Our Strategy
            </Link>
            <Link to="/about/faith" className="sidebar-link" onClick={onClose}>
              Statement of Faith
            </Link>
          </div>
          
          <Link to="/events" className="sidebar-link" onClick={onClose}>
            <FiCalendar /> Events & Calendar
          </Link>
          
          <div className="sidebar-group">
            <div className="sidebar-group-title">
              <FiUsers /> Ministries
            </div>
            <Link to="/ministries/adults" className="sidebar-link" onClick={onClose}>
              Adult Ministry
            </Link>
            <Link to="/ministries/youth" className="sidebar-link" onClick={onClose}>
              Youth Fellowship
            </Link>
            <Link to="/ministries/children" className="sidebar-link" onClick={onClose}>
              Children's Church
            </Link>
            <Link to="/ministries/men" className="sidebar-link" onClick={onClose}>
              Men's Fellowship
            </Link>
            <Link to="/ministries/women" className="sidebar-link" onClick={onClose}>
              Women's Ministry
            </Link>
          </div>
          
          <Link to="/gallery" className="sidebar-link" onClick={onClose}>
            <FiImage /> Photo Gallery
          </Link>
          
          <Link to="/contact" className="sidebar-link" onClick={onClose}>
            <FiMail /> Contact Us
          </Link>
          
          <Link to="/admin" className="sidebar-link admin-link" onClick={onClose}>
            <FiBookOpen /> Admin Panel
          </Link>
        </nav>
        
        <div className="sidebar-footer">
          <div className="service-times">
            <h4>Service Times</h4>
            <p>Sunday: 9:00 AM</p>
            <p>Wednesday: 6:00 PM</p>
          </div>
          <div className="prayer-times">
            <h4><FaPrayingHands /> Prayer</h4>
            <p>Tue & Fri: 5:30 AM</p>
          </div>
        </div>
      </div>
      
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
    </>
  );
};

export default Sidebar;