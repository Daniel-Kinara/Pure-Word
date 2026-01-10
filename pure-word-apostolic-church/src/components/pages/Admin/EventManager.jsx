import { useState, useEffect } from 'react';
import { FiCalendar, FiEdit2, FiTrash2, FiPlus, FiSave, FiX, FiClock, FiMapPin } from 'react-icons/fi';
import { useEvents } from '../../../context/EventContext';
import './EventManager.css';

const EventManager = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    category: 'service',
    featured: false
  });

  useEffect(() => {
    // Reset form when switching events
    if (currentEvent) {
      setFormData({
        title: currentEvent.title,
        date: currentEvent.date.toISOString().split('T')[0],
        time: currentEvent.time,
        location: currentEvent.location,
        description: currentEvent.description || '',
        category: currentEvent.category,
        featured: currentEvent.featured || false
      });
    }
  }, [currentEvent]);

  const categories = [
    { value: 'service', label: 'Service' },
    { value: 'study', label: 'Bible Study' },
    { value: 'youth', label: 'Youth Event' },
    { value: 'women', label: "Women's Ministry" },
    { value: 'men', label: "Men's Fellowship" },
    { value: 'outreach', label: 'Community Outreach' },
    { value: 'special', label: 'Special Event' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      ...formData,
      date: new Date(formData.date),
      time: formData.time,
      location: formData.location,
      description: formData.description,
      category: formData.category,
      featured: formData.featured
    };

    if (currentEvent) {
      updateEvent(currentEvent.id, { ...eventData, id: currentEvent.id });
    } else {
      addEvent(eventData);
    }

    handleReset();
  };

  const handleReset = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      category: 'service',
      featured: false
    });
    setCurrentEvent(null);
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setCurrentEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="event-manager">
      <div className="manager-header">
        <h2><FiCalendar /> Event Management</h2>
        <button 
          className={`btn-primary ${isEditing ? 'hidden' : ''}`}
          onClick={() => setIsEditing(true)}
        >
          <FiPlus /> Add New Event
        </button>
      </div>

      <div className="manager-content">
        {(isEditing || currentEvent) && (
          <div className="event-form-section">
            <div className="form-header">
              <h3>{currentEvent ? 'Edit Event' : 'Add New Event'}</h3>
              <button className="btn-text" onClick={handleReset}>
                <FiX /> Cancel
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="event-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Event Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter event title"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                    />
                    <span>Featured Event</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description"
                  rows="4"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={handleReset}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  <FiSave /> {currentEvent ? 'Update Event' : 'Save Event'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="events-list-section">
          <div className="section-header">
            <h3>All Events ({events.length})</h3>
            <div className="events-stats">
              <span className="stat">
                {events.filter(e => e.featured).length} Featured
              </span>
              <span className="stat">
                {events.filter(e => new Date(e.date) > new Date()).length} Upcoming
              </span>
            </div>
          </div>

          {events.length === 0 ? (
            <div className="empty-state">
              <FiCalendar className="empty-icon" />
              <h4>No Events Yet</h4>
              <p>Start by adding your first event using the "Add New Event" button.</p>
            </div>
          ) : (
            <div className="events-table">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date & Time</th>
                    <th>Location</th>
                    <th>Category</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map(event => (
                      <tr key={event.id} className={new Date(event.date) < new Date() ? 'past-event' : ''}>
                        <td>
                          <div className="event-title">
                            <strong>{event.title}</strong>
                            {event.description && (
                              <small>{event.description.substring(0, 50)}...</small>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="event-datetime">
                            <div>{formatDate(event.date)}</div>
                            <div className="event-time">
                              <FiClock /> {event.time}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="event-location">
                            <FiMapPin /> {event.location}
                          </div>
                        </td>
                        <td>
                          <span className={`event-category ${event.category}`}>
                            {categories.find(c => c.value === event.category)?.label}
                          </span>
                        </td>
                        <td>
                          <span className={`featured-badge ${event.featured ? 'featured' : 'not-featured'}`}>
                            {event.featured ? 'Yes' : 'No'}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              className="action-btn edit"
                              onClick={() => handleEdit(event)}
                            >
                              <FiEdit2 />
                            </button>
                            <button 
                              className="action-btn delete"
                              onClick={() => handleDelete(event.id)}
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="manager-tips">
          <h4>Tips for Event Management</h4>
          <ul>
            <li>Add events at least 2 weeks in advance for proper planning</li>
            <li>Use featured events for important announcements</li>
            <li>Update event details promptly if changes occur</li>
            <li>Archive past events monthly to keep the list manageable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventManager;