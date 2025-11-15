// src/utils/dateUtils.ts
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  addDays, 
  isSameMonth, 
  isSameDay 
} from 'date-fns';

/**
 * Gets the array of day names for the week, starting from the locale's start of the week.
 * @param {string} formatStr - The date-fns format string (e.g., 'EEE' for Sun, Mon).
 * @returns {string[]} An array of seven day names.
 */
export const getDayNames = (formatStr: string = 'EEE'): string[] => {
  return Array.from({ length: 7 }).map((_, index) => {
    const startDay = startOfWeek(new Date());
    const currentDay = addDays(startDay, index);
    return format(currentDay, formatStr);
  });
};

/**
 * Generates the array of dates to display in the calendar grid (including leading/trailing days).
 * @param {Date} date - The date used to determine the month and year to display.
 * @returns {Date[]} An array of Date objects covering the calendar grid (up to 42 days).
 */
export const getCalendarDates = (date: Date): Date[] => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dates = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dates;
};

/**
 * Checks if the given day is in the month of the reference date.
 * @param {Date} day - The date cell being rendered.
 * @param {Date} referenceDate - The selected date, used to define the current month.
 * @returns {boolean} True if the day is in the current month.
 */
export const isDayInCurrentMonth = (day: Date, referenceDate: Date): boolean => {
  return isSameMonth(day, referenceDate);
}

/**
 * Checks if the given day is the selected date.
 * @param {Date} day - The date cell being rendered.
 * @param {Date} selectedDate - The date that should be highlighted.
 * @returns {boolean} True if the day matches the selected date.
 */
export const isDaySelected = (day: Date, selectedDate: Date): boolean => {
  return isSameDay(day, selectedDate);
}