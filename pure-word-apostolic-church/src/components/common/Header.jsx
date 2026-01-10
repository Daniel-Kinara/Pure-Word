import { FiMenu, FiSearch } from 'react-icons/fi';
import { FaChurch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const currentYear = new Date().getFullYear();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <FaChurch />
          </div>
          <div className="logo-text">
            <h1>Pure Word Apostolic Church</h1>
            <p className="initials">(P.W.A)</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="search-btn">
            <FiSearch />
          </button>
        </nav>

        <button 
          className="menu-toggle" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;