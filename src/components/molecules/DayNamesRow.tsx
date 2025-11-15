// src/components/molecules/DayNamesRow.tsx
import React from 'react';
import { getDayNames } from '../../utils/dateUtils';

/**
 * Renders the row containing the names of the days of the week (Sun, Mon, etc.).
 */
export const DayNamesRow = () => {
  const dayNames = getDayNames();

  return (
    <div className="day-names-row grid grid-cols-7 border-b" data-testid="day-names-row">
      {dayNames.map((name, index) => (
        <div key={index} className="text-center font-semibold p-2 text-gray-700">
          {name}
        </div>
      ))}
    </div>
  );
};