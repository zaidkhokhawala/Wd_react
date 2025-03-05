import React from 'react';
import ChecklistProvider from './ChecklistContext'; // Import the context provider
import Checklist from './Checklist'; // Import the Checklist component

function App() {
  return (
    <ChecklistProvider>
      <Checklist />
    </ChecklistProvider>
  );
}

export default App;
