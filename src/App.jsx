import './App.css'
import FooterComponent from './Components/Footer'
import Header from './Components/Header'
import  Card from './Components/Card';
import { FaUserCircle } from 'react-icons/fa';

function App() {

  return (
    <>
      <Header/>
      <main>
         <Card nftName={'Juan'} price={1234} nftImage={'../public/design2.webp'} profileImage={<FaUserCircle/>} placeBit={89} address={'#'}/>
      </main>
      <FooterComponent/>
    </>
  )
}

export default App
