import { useState, useEffect } from 'react';
import { FiCalendar } from 'react-icons/fi';
import './EventCounter.css';

const EventCounter = ({ events }) => {
  const [nextEvent, setNextEvent] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (events && events.length > 0) {
      // Find the next upcoming event
      const now = new Date();
      const upcomingEvents = events
        .filter(event => event.date > now)
        .sort((a, b) => a.date - b.date);
      
      if (upcomingEvents.length > 0) {
        setNextEvent(upcomingEvents[0]);
      } else {
        setNextEvent(null);
      }
    }
  }, [events]);

  useEffect(() => {
    if (!nextEvent) return;

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = nextEvent.date.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, [nextEvent]);

  if (!nextEvent) {
    return (
      <div className="event-counter">
        <div className="counter-header">
          <FiCalendar />
          <h3>Next Event</h3>
        </div>
        <div className="no-events-message">
          <p>No upcoming events scheduled</p>
        </div>
      </div>
    );
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="event-counter">
      <div className="counter-header">
        <FiCalendar />
        <h3>Next Event</h3>
      </div>
      
      <div className="next-event-details">
        <h4>{nextEvent.title}</h4>
        <p className="event-date">{formatDate(nextEvent.date)}</p>
        <p className="event-time">{nextEvent.time} • {nextEvent.location}</p>
      </div>

      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-value">{timeRemaining.days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{timeRemaining.hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{timeRemaining.minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{timeRemaining.seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>

      <div className="counter-footer">
        <p>Counting down to our next gathering</p>
      </div>
    </div>
  );
};

export default EventCounter;