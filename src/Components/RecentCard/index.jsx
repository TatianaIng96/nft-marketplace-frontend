import { useState, useEffect } from 'react';
import Card from '../Card';
import { cardData } from '../../assets/data';
import './Recent.scss';

const RecentCard = ({ title }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(cardData);
  }, []);
  return (
    <div className="recent">
      <h2>{title}</h2>
      <div className="cards">
        {
          data.map((nft) => {
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

  );
};

export default RecentCard;
