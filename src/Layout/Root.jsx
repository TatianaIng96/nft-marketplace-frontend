// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from '../Components/Header';
import FooterComponent from '../Components/Footer';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default Root;
