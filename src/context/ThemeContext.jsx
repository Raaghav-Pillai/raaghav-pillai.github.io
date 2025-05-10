import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Hook for accessing theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check if user has a preference in localStorage or use system preference
  const getInitialMode = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('darkMode');
      if (typeof storedPrefs === 'string') {
        return storedPrefs === 'true';
      }
      
      // If no preference in localStorage, use system preference
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return true;
      }
    }
    
    // Default to light mode
    return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Update localStorage when darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    
    // Update document class for Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;