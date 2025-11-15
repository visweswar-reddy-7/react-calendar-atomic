// src/components/organisms/Calendar.tsx
import React from 'react';
import { format, parseISO } from 'date-fns';
import { getCalendarDates, isDayInCurrentMonth, isDaySelected } from '../../utils/dateUtils';
import { DateValue } from '../../types';
import { DayCell } from '../atoms/DayCell';
import { DayNamesRow } from '../molecules/DayNamesRow';

interface CalendarProps {
  /**
   * The date to focus the calendar on and highlight. Accepts Date, number, or string (ISO format).
   */
  date: DateValue;
}

/**
 * A reusable calendar component that displays a month view based on the provided date prop.
 */
export const Calendar = ({ date }: CalendarProps) => {
  // Convert input to a Date object.
  const selectedDate = date instanceof Date ? date : parseISO(String(date));
  
  // Header: Month and Year
  const currentMonthYear = format(selectedDate, 'MMMM yyyy');
  
  // Grid data
  const calendarDates = getCalendarDates(selectedDate);

  return (
    <div className="calendar-container w-full max-w-sm border rounded-lg shadow-xl p-4 bg-white mx-auto">
      
      {/* 1. Month and Year Header */}
      <h3 
        className="text-2xl font-extrabold text-center mb-4 text-indigo-700"
        data-testid="month-year-header"
      >
        {currentMonthYear}
      </h3>

      {/* 2. Days of the Week */}
      <DayNamesRow />

      {/* 3. Dates Grid */}
      <div 
        className="dates-grid grid grid-cols-7"
        data-testid="dates-grid"
      >
        {calendarDates.map((day, index) => (
          <DayCell 
            key={index} 
            day={day} 
            isCurrentMonth={isDayInCurrentMonth(day, selectedDate)} 
            isSelected={isDaySelected(day, selectedDate)}
          />
        ))}
      </div>
    </div>
  );
};