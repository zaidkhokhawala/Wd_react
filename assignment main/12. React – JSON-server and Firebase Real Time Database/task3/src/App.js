import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { AuthProvider, useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

// Import the components
import ThemeToggleButton from './ThemeToggleButton';
import Authentication from './Authentication';

// Main App component
const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`bg-${theme} text-${theme === 'light' ? 'dark' : 'light'} min-vh-100`}
      style={{ transition: 'background 0.3s ease' }}
    >
      <div className="container text-center">
        <h1 className="my-5">React Theme & Authentication</h1>
        <ThemeToggleButton />
        <Authentication />
      </div>
    </div>
  );
};

// Root component with both Theme and Auth Providers
const Root = () => (
  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);

export default Root;
