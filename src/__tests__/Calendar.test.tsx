// src/components/organisms/Calendar.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from '../components/organisms/Calendar';

describe('Calendar Component Requirements', () => {
  const testDate = '2024-07-15T12:00:00.000Z'; 
  const testDay = 15; 

  it('1. Displays the correct month and year (First Row)', () => {
    render(<Calendar date={testDate} />);
    const header = screen.getByTestId('month-year-header');
    expect(header).toHaveTextContent('July 2024'); 
  });

  it('2. Displays the days of the week (Second Row)', () => {
    render(<Calendar date={testDate} />);
    const dayNamesRow = screen.getByTestId('day-names-row');
    expect(dayNamesRow).toHaveTextContent('Sun');
    expect(dayNamesRow).toHaveTextContent('Mon');
  });

  it('3. Renders all dates for the month and surrounding weeks', () => {
    render(<Calendar date={testDate} />);
    const allCells = screen.getAllByTestId(/day-cell-\d+/);
    expect(allCells.length).toBe(31); 
    expect(screen.getByText('30')).toBeInTheDocument(); 
  });

  it('4. Highlights the appropriate date cell based on the date prop', () => {
    render(<Calendar date={testDate} />);
    
    const selectedDayCell = screen.getByTestId(`day-cell-${testDay}`);
    
    expect(selectedDayCell).toHaveClass('bg-blue-500');
    expect(selectedDayCell).toHaveClass('text-white');
  });
});