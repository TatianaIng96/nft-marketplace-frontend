/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark');
  };

  const backgroundColor = theme === 'dark' ? '#13131d' : '#f5f8fa';
  const color = theme === 'dark' ? '' : '#13131d';
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = color;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeProvider,
  ThemeContext,
};
