import './App.scss';
import { FaUserCircle } from 'react-icons/fa';
import FooterComponent from './Components/Footer';
import Header from './Components/Header';
import Card from './Components/Card';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
      </main>
      <FooterComponent />
    </>
  );
}

export default App;
