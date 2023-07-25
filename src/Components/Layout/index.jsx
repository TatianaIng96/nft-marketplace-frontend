import './Layout.scss';

import Header from '../Header';

import FooterComponent from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <FooterComponent />
    </>
  );
};

export default Layout;
