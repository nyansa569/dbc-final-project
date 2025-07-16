import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import '../css/calendar.css';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SAMPLE_EVENTS = [
  { id: 1, title: 'Property Viewing', type: 'viewing', time: '10:00 AM', location: 'Crystal House' },
  { id: 2, title: 'Client Meeting', type: 'meeting', time: '2:30 PM', location: 'Park Side Colonial' },
  { id: 3, title: 'Property Inspection', type: 'inspection', time: '11:00 AM', location: 'Marina Hill' }
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isToday = (date) => {
    const today = new Date();
    return date && 
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date) => {
    return date && 
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).format(date);
  };

  return (
    <div className="calendar-container">
      <aside className="event-list">
        <header>
          <h2>Schedule</h2>
          <button className="create-btn">
            <FaPlus /> Add Event
          </button>
        </header>
        <div className="events">
          <h3>Today's Events</h3>
          {SAMPLE_EVENTS.map(event => (
            <div key={event.id} className={`event-card ${event.type}`}>
              <div className="event-time">{event.time}</div>
              <h4>{event.title}</h4>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </aside>

      <main className="calendar-main">
        <header className="calendar-header">
          <h2>{formatDate(currentDate)}</h2>
          <div className="calendar-nav">
            <button onClick={prevMonth}><FaChevronLeft /></button>
            <button onClick={() => setCurrentDate(new Date())}>Today</button>
            <button onClick={nextMonth}><FaChevronRight /></button>
          </div>
        </header>

        <div className="calendar-grid">
          {WEEKDAYS.map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
          
          {getDaysInMonth(currentDate).map((date, index) => (
            <div
              key={index}
              className={`calendar-day ${!date ? 'empty' : ''} ${isToday(date) ? 'today' : ''} ${isSelected(date) ? 'selected' : ''}`}
              onClick={() => date && setSelectedDate(date)}
            >
              {date && (
                <>
                  <span className="day-number">{date.getDate()}</span>
                  {SAMPLE_EVENTS.length > 0 && (
                    <div className="day-events">
                      <span className="event-indicator" />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
