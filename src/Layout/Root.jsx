// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
import './Layout.scss';
import Header from '../Components/Header';
import FooterComponent from '../Components/Footer';

const Root = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'ligth-mode'}>
      <Header
        chooseTheme={toggleTheme}
        selectedTheme={theme}
      />
      <main className={theme === 'dark' ? 'dark-mode' : 'ligth-mode'}>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default Root;
