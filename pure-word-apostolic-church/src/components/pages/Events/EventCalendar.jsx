import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import './EventCalendar.css';

const EventCalendar = ({ currentMonth, selectedDate, events, onDateClick, onNextMonth, onPrevMonth }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDay = (day) => {
    return events.filter(event => isSameDay(event.date, day));
  };

  return (
    <div className="event-calendar">
      <div className="calendar-header">
        <button className="nav-btn" onClick={onPrevMonth}>
          <FiChevronLeft />
        </button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button className="nav-btn" onClick={onNextMonth}>
          <FiChevronRight />
        </button>
      </div>

      <div className="calendar-grid">
        {dayNames.map(dayName => (
          <div key={dayName} className="day-header">
            {dayName}
          </div>
        ))}

        {days.map(day => {
          const dayEvents = getEventsForDay(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isSelected = isSameDay(day, selectedDate);
          const isToday = isSameDay(day, new Date());

          return (
            <div
              key={day.toString()}
              className={`calendar-day ${!isCurrentMonth ? 'disabled' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
              onClick={() => isCurrentMonth && onDateClick(day)}
            >
              <div className="day-number">{format(day, 'd')}</div>
              {dayEvents.length > 0 && (
                <div className="day-events">
                  {dayEvents.slice(0, 3).map((event, index) => (
                    <div
                      key={index}
                      className={`event-dot ${event.category}`}
                      title={event.title}
                    />
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="more-events">+{dayEvents.length - 3}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div className="legend-title">Event Categories:</div>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-dot service"></span>
            <span>Services</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot study"></span>
            <span>Bible Studies</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot youth"></span>
            <span>Youth Events</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot outreach"></span>
            <span>Outreach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;