// src/App.tsx
import React from 'react';
import { Calendar } from './components/organisms/Calendar';

function App() {
  /** Today's date is used for the default calendar view and highlighted date. */
  const today = new Date(); 

  return (
    <div className="App flex justify-center items-start min-h-screen pt-10">
      <Calendar date={today} />
    </div>
  );
}

export default App;