/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState('dark');

  const toggleTheme = () => {
    settheme(theme === 'dark' ? 'ligth' : 'dark');
  };

  const color = theme === 'dark' ? '' : '#13131d';
  const backgroundColor = theme === 'dark' ? '#13131d' : '#f5f8fa';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeContext,
  ThemeProvider,
};
