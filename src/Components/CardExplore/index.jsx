import { FaUserCircle } from 'react-icons/fa';
import Card from '../Card';
import './CardExplore.scss';

const CardExplore = () => (
  <div className="card-secction">
    <div className="container-2">
      <div className="row-1">
        <div className="">
          <div className="cards">
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
            <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardExplore;
