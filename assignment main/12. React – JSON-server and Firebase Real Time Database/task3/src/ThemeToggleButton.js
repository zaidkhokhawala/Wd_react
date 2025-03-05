<<<<<<< HEAD
import React from 'react';
import { useTheme } from './ThemeContext'; // Ensure you are importing useTheme correctly

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton; // Ensure this export
=======
import React from 'react';
import { useTheme } from './ThemeContext'; // Ensure you are importing useTheme correctly

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton; // Ensure this export
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
