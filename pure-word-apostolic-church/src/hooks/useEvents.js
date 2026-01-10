import { useState, useEffect, useCallback } from 'react';
import { getEvents, saveEvents } from '../utils/data';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load events from local storage or initial data
    const loadedEvents = getEvents();
    setEvents(loadedEvents);
    setLoading(false);
  }, []);

  const addEvent = useCallback((event) => {
    const newEvent = {
      ...event,
      id: Date.now(),
      createdAt: new Date()
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    saveEvents(updatedEvents);
  }, [events]);

  const updateEvent = useCallback((id, updatedEvent) => {
    const updatedEvents = events.map(event => 
      event.id === id ? { ...updatedEvent, id } : event
    );
    setEvents(updatedEvents);
    saveEvents(updatedEvents);
  }, [events]);

  const deleteEvent = useCallback((id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    saveEvents(updatedEvents);
  }, [events]);

  const getUpcomingEvents = useCallback((limit = null) => {
    const now = new Date();
    const upcoming = events
      .filter(event => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return limit ? upcoming.slice(0, limit) : upcoming;
  }, [events]);

  const getEventsByDate = useCallback((date) => {
    const targetDate = new Date(date);
    return events.filter(event => 
      new Date(event.date).toDateString() === targetDate.toDateString()
    );
  }, [events]);

  const getFeaturedEvents = useCallback((limit = null) => {
    const featured = events
      .filter(event => event.featured)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return limit ? featured.slice(0, limit) : featured;
  }, [events]);

  return {
    events,
    loading,
    addEvent,
    updateEvent,
    deleteEvent,
    getUpcomingEvents,
    getEventsByDate,
    getFeaturedEvents
  };
};