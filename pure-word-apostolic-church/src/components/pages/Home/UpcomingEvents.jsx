import { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock data - in production, fetch from API
    const mockEvents = [
      {
        id: 1,
        title: "Sunday Worship Service",
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        time: "9:00 AM",
        location: "Main Sanctuary",
        description: "Weekly Sunday service with worship, prayer, and preaching"
      },
      {
        id: 2,
        title: "Bible Study",
        date: new Date(new Date().setDate(new Date().getDate() + 4)),
        time: "6:00 PM",
        location: "Church Hall",
        description: "In-depth Bible study for all ages"
      },
      {
        id: 3,
        title: "Youth Camp",
        date: new Date(new Date().setDate(new Date().getDate() + 7)),
        time: "8:00 AM",
        location: "Church Grounds",
        description: "Annual youth camping and fellowship"
      }
    ];
    setEvents(mockEvents);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="upcoming-events-section">
      <div className="section-header">
        <h2>
          <FiCalendar /> Upcoming Events
        </h2>
        <Link to="/events" className="see-all-link">
          View All Events <FiArrowRight />
        </Link>
      </div>

      <div className="events-count">
        <div className="count-number">{events.length}</div>
        <div className="count-label">Upcoming Events</div>
      </div>

      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <div className="date-day">{event.date.getDate()}</div>
              <div className="date-month">
                {event.date.toLocaleString('default', { month: 'short' })}
              </div>
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-meta">
                <div className="meta-item">
                  <FiClock />
                  <span>{formatDate(event.date)} • {event.time}</span>
                </div>
                <div className="meta-item">
                  <FiMapPin />
                  <span>{event.location}</span>
                </div>
              </div>
              <Link to={`/events?event=${event.id}`} className="event-link">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="events-cta">
        <p>Stay updated with all church activities</p>
        <Link to="/events" className="btn-primary">
          <FiCalendar /> Full Events Calendar
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;