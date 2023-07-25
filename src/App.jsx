/* eslint-disable import/no-unresolved */
import './App.scss';
import { FaUserCircle } from 'react-icons/fa';
import FooterComponent from './Components/Footer';
import Header from './Components/Header';
import Card from './Components/Card';
import EditPersonalInformation from './pages/EditPersonalInformation';
import CreateNFTForm from './pages/CreateNFTForm';
import LogInForm from './pages/LogInForm';
import SignUpForm from './pages/SignUpForm';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <EditPersonalInformation />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
