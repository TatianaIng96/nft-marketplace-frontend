/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggletheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark');
  };

  const backgroundColor = theme === 'dark' ? '#13131d' : '#ACACAC';
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeProvider,
  ThemeContext,
};
