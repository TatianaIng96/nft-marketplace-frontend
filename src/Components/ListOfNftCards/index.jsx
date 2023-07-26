import { useState, useEffect } from 'react';
import { cardData } from '../../assets/data';
import Card from '../Card';

const ListOfNftCards = () => {
  const [dataNft, setDataNft] = useState([]);

  useEffect(() => {
    setDataNft(cardData);
  }, []);

  return (
    <>
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
    </>
  );
};

export default ListOfNftCards;
