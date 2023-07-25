import './Layout.scss';

import Header from '../Header';

import FooterComponent from '../Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main">
      {children}
    </main>
    <FooterComponent />
  </>
);

export default Layout;
