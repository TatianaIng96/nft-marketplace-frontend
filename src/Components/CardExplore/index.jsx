import { useEffect, useState } from 'react';
import Card from '../Card';
import './CardExplore.scss';
import cardData from '../../assets/data';

const CardExplore = () => {
  const [dataNft, setDataNft] = useState([]);

  useEffect(() => {
    setDataNft(cardData);
  }, []);
  return (
    <div className="card-secction">
      <div className="container-2">
        <div className="row-1">
          <div className="">
            <div className="cards">
              {
                dataNft.map((nft) => {
                  return (
                    <Card
                      key={nft.id}
                      totalLikes={nft.totalLikes}
                      nftName={nft.nftName}
                      price={nft.price}
                      nftImage={nft.nftImage}
                      profileImage1={nft.profileImage1}
                      profileImage2={nft.profileImage2}
                      profileImage3={nft.profileImage3}
                      placeBit={nft.placeBit}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExplore;
