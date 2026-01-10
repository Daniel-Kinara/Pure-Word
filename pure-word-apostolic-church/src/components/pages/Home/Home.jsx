import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUsers, FiHome, FiArrowRight } from 'react-icons/fi';
import { FaChurch, FaPrayingHands } from 'react-icons/fa';
import ImageSlider from '../../common/ImageSlider';
import EventCounter from '../../common/EventCounter';
import MinistryCard from '../../common/MinistryCard';
import WelcomeGrid from './WelcomeGrid';
import UpcomingEvents from './UpcomingEvents';
import MinistriesSummary from './MinistriesSummary';
import './Home.css';

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [ministries] = useState([
    {
      id: 1,
      title: "Adult Ministry",
      description: "Spiritual growth and fellowship for adults",
      icon: <FiUsers />,
      link: "/ministries/adults"
    },
    {
      id: 2,
      title: "Youth Fellowship",
      description: "Engaging the youth in faith and activities",
      icon: <FaChurch />,
      link: "/ministries/youth"
    },
    {
      id: 3,
      title: "Children's Church",
      description: "Nurturing young souls in God's word",
      icon: <FiHome />,
      link: "/ministries/children"
    },
    {
      id: 4,
      title: "Men's Fellowship",
      description: "Brotherhood and spiritual accountability",
      icon: <FaPrayingHands />,
      link: "/ministries/men"
    },
    {
      id: 5,
      title: "Women's Ministry",
      description: "Women empowering each other in faith",
      icon: <FiUsers />,
      link: "/ministries/women"
    }
  ]);

  useEffect(() => {
    // Mock data - replace with API call
    const events = [
      {
        id: 1,
        title: "Sunday Service",
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        time: "9:00 AM",
        location: "Main Sanctuary"
      },
      {
        id: 2,
        title: "Bible Study",
        date: new Date(new Date().setDate(new Date().getDate() + 4)),
        time: "6:00 PM",
        location: "Church Hall"
      },
      {
        id: 3,
        title: "Youth Camp",
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
        time: "8:00 AM",
        location: "Church Grounds"
      }
    ];
    setUpcomingEvents(events);
  }, []);

  return (
    <div className="home-page">
      {/* Welcome Section with Image Slider */}
      <section className="welcome-section">
        <WelcomeGrid />
      </section>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <UpcomingEvents />
      </section>

      {/* Ministries Summary Section */}
      <section className="ministries-section">
        <MinistriesSummary />
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="info-card">
          <div className="info-icon">
            <FaChurch />
          </div>
          <h3>Service Times</h3>
          <p>Sunday: 9:00 AM - 12:00 PM</p>
          <p>Wednesday: 6:00 PM - 8:00 PM</p>
        </div>
        <div className="info-card">
          <div className="info-icon">
            <FaPrayingHands />
          </div>
          <h3>Prayer Meetings</h3>
          <p>Tuesday & Friday: 5:30 AM</p>
          <p>Saturday: 7:00 PM</p>
        </div>
        <div className="info-card">
          <div className="info-icon">
            <FiUsers />
          </div>
          <h3>Join Us</h3>
          <p>All are welcome regardless of background</p>
          <Link to="/contact" className="btn-text">Get Directions</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;