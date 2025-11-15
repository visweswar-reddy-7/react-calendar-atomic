# 📅 React Atomic Calendar Component

This project features a reusable calendar component built with **React**, **TypeScript**, and styled using **Tailwind CSS**, following the principles of **Atomic Design**. It dynamically generates a monthly view based on a single `date` prop, focusing only on the dates within the selected month.

## ✨ Example

The component dynamically highlights the date provided in the `date` prop and maintains perfect grid alignment while hiding dates from adjacent months.


***

## 🚀 Getting Started

To get the project running locally, follow these steps:

### Prerequisites

You need **Node.js** (which includes npm) installed on your system.

### Installation Steps

1.  **Download and Unzip:**
    Download the project source code and extract the contents.

2.  **Navigate to the Project:**
    Open your terminal and navigate to the root directory:
    ```bash
    cd react-calendar-atomic
    ```

3.  **Install Dependencies:**
    Install all required packages (`date-fns`, `tailwindcss`, testing libraries, etc.):
    ```bash
    npm install
    ```

***

## 💻 Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view the calendar component in your browser.

### `npm test`

Launches the test runner in interactive watch mode. This runs the component tests which verify:
* Correct display of the month and year header.
* Correct structural count (42 slots) for the calendar grid, ensuring empty slots are rendered for alignment.
* Accurate highlighting of the specified date.

### `npm run build`

Builds the app for production to the `build` folder.

***

## 🏗️ Project Architecture (Atomic Design)

The component is structured for maintainability and separation of concerns:

| Layer | Component | Role |
| :--- | :--- | :--- |
| **Utilities** | `dateUtils.ts` | **Logic:** Handles all date computations, grid generation, and date comparisons (e.g., `isDaySelected`). |
| **Atom** | `DayCell.tsx` | **Element:** Renders a single slot. Conditionally renders the date number and applies highlighting, or renders an empty slot for alignment. |
| **Molecule** | `DayNamesRow.tsx` | **Group:** Displays the static column headers (Sun, Mon, Tue, etc.). |
| **Organism** | `Calendar.tsx` | **Structure:** Receives the primary `date` prop, orchestrates the utilities, and assembles the Atoms and Molecules into the full calendar view. |

### Component Usage Example

The calendar accepts a `date` prop, which can be a `Date` object, timestamp (`number`), or an ISO string (`string`):

```tsx
import { Calendar } from './components/organisms/Calendar';

// Renders a calendar focused on the current date
<Calendar date={new Date()} /> 

// Renders a calendar focused on a specific date (e.g., Nov 15, 2025)
<Calendar date="2025-11-15" />

