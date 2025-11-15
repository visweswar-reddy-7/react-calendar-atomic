// src/components/atoms/DayCell.tsx
import React from 'react';

interface DayCellProps {
  /** The date represented by this cell. */
  day: Date;
  /** Flag indicating if this day belongs to the current month being viewed. */
  isCurrentMonth: boolean;
  /** Flag indicating if this day is the currently selected date. */
  isSelected: boolean;
}

export const DayCell = ({ day, isCurrentMonth, isSelected }: DayCellProps) => {
  if (!isCurrentMonth) {
    return (
      <div className="day-cell text-center p-2">
        {/* Render an empty but visible div to maintain grid structure */}
      </div>
    ); 
  }

  const className = `
    day-cell 
    text-center p-2 
    text-gray-900 
    ${isSelected ? 'bg-blue-500 text-white font-bold rounded-full' : 'hover:bg-gray-100'}
    cursor-pointer
  `;

  return (
    <div className={className} data-testid={`day-cell-${day.getDate()}`}>
      {day.getDate()}
    </div>
  );
};