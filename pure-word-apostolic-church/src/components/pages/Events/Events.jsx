import { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiMapPin, FiFilter, FiPlus } from 'react-icons/fi';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import EventCalendar from './EventCalendar';
import EventCounter from '../../common/EventCounter';
import './Events.css';

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      time: "9:00 AM",
      location: "Main Sanctuary",
      description: "Weekly Sunday service with worship, prayer, and preaching",
      category: "service",
      featured: true
    },
    {
      id: 2,
      title: "Bible Study",
      date: new Date(new Date().setDate(new Date().getDate() + 4)),
      time: "6:00 PM",
      location: "Church Hall",
      description: "In-depth Bible study for all ages",
      category: "study",
      featured: false
    },
    {
      id: 3,
      title: "Youth Camp",
      date: new Date(new Date().setDate(new Date().getDate() + 7)),
      time: "8:00 AM",
      location: "Church Grounds",
      description: "Annual youth camping and fellowship",
      category: "youth",
      featured: true
    },
    {
      id: 4,
      title: "Women's Fellowship",
      date: new Date(new Date().setDate(new Date().getDate() + 10)),
      time: "3:00 PM",
      location: "Fellowship Hall",
      description: "Monthly women's prayer and fellowship",
      category: "women",
      featured: false
    },
    {
      id: 5,
      title: "Men's Breakfast",
      date: new Date(new Date().setDate(new Date().getDate() + 12)),
      time: "7:00 AM",
      location: "Church Kitchen",
      description: "Men's fellowship over breakfast",
      category: "men",
      featured: true
    },
    {
      id: 6,
      title: "Community Outreach",
      date: new Date(new Date().setDate(new Date().getDate() + 15)),
      time: "10:00 AM",
      location: "Various Locations",
      description: "Serving the local community",
      category: "outreach",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'service', label: 'Services' },
    { id: 'study', label: 'Bible Studies' },
    { id: 'youth', label: 'Youth Events' },
    { id: 'women', label: "Women's Ministry" },
    { id: 'men', label: "Men's Fellowship" },
    { id: 'outreach', label: 'Community Outreach' }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  const eventsForSelectedDate = filteredEvents.filter(event => 
    isSameDay(event.date, selectedDate)
  );

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  return (
    <div className="events-page">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Church Events & Calendar</h1>
          <p className="subtitle">Stay updated with all our church activities and programs</p>
        </div>
      </div>

      <div className="events-overview">
        <div className="events-counter-section">
          <h2><FiCalendar /> Upcoming Events</h2>
          <EventCounter events={events} />
        </div>

        <div className="event-filters">
          <h3><FiFilter /> Filter Events</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="events-content">
        <div className="events-calendar-section">
          <EventCalendar 
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            events={events}
            onDateClick={handleDateClick}
            onNextMonth={nextMonth}
            onPrevMonth={prevMonth}
          />
        </div>

        <div className="events-list-section">
          <div className="section-header">
            <h3>
              {isToday(selectedDate) ? "Today's Events" : 
               `Events on ${format(selectedDate, 'MMMM d, yyyy')}`}
            </h3>
            <span className="events-count">{eventsForSelectedDate.length} events</span>
          </div>

          {eventsForSelectedDate.length > 0 ? (
            <div className="events-list">
              {eventsForSelectedDate.map(event => (
                <div key={event.id} className={`event-card ${event.featured ? 'featured' : ''}`}>
                  {event.featured && <div className="featured-badge">Featured</div>}
                  <div className="event-date-time">
                    <div className="event-date">
                      <span className="day">{format(event.date, 'd')}</span>
                      <span className="month">{format(event.date, 'MMM')}</span>
                    </div>
                    <div className="event-time">
                      <FiClock />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="event-details">
                    <h4>{event.title}</h4>
                    <p className="event-description">{event.description}</p>
                    <div className="event-meta">
                      <span className="event-location">
                        <FiMapPin /> {event.location}
                      </span>
                      <span className={`event-category ${event.category}`}>
                        {categories.find(c => c.id === event.category)?.label}
                      </span>
                    </div>
                  </div>
                  <button className="event-actions">
                    <FiPlus />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <div className="no-events-icon">
                <FiCalendar />
              </div>
              <h4>No events scheduled</h4>
              <p>There are no events scheduled for this date.</p>
              <p>Check other dates or filter by category.</p>
            </div>
          )}

          <div className="upcoming-highlights">
            <h3>Upcoming Featured Events</h3>
            <div className="highlighted-events">
              {events
                .filter(event => event.featured)
                .slice(0, 2)
                .map(event => (
                  <div key={event.id} className="highlight-event">
                    <div className="highlight-date">
                      {format(event.date, 'MMM d')}
                    </div>
                    <div className="highlight-details">
                      <h5>{event.title}</h5>
                      <p>{event.time} • {event.location}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="events-cta">
        <h2>Want to Add an Event?</h2>
        <p>Church ministries and groups can submit events for approval.</p>
        <button className="btn-primary">
          <FiPlus /> Submit Event Request
        </button>
      </div>
    </div>
  );
};

export default Events;