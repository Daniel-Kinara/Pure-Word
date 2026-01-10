import { createContext, useState, useContext } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Sunday Service",
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      time: "9:00 AM",
      location: "Main Sanctuary",
      description: "Weekly Sunday worship service",
      category: "service"
    },
    // Add more events...
  ]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const updateEvent = (id, updatedEvent) => {
    setEvents(events.map(event => event.id === id ? updatedEvent : event));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);