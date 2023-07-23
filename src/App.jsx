/* eslint-disable import/no-unresolved */
import './App.scss';
import { FaUserCircle } from 'react-icons/fa';
import FooterComponent from './Components/Footer';
import Header from './Components/Header';
import Card from './Components/Card';
import CreateNFTForm from './Components/CreateNFTForm';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <CreateNFTForm />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
