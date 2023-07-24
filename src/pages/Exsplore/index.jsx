import './Explore.scss';
import { FaUserCircle } from 'react-icons/fa';
import Inner from '../../Components/Inner';
import Filter from '../../Components/Filter';
import Card from '../../Components/Card';

function Explore() {
  return (
    <div className="explore-secction">
      <Inner />
      <Filter />
      <div className="card-seccion">
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
    </div>
  );
}

export default Explore;
