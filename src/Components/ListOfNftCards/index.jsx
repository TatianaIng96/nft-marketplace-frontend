import { useState, useEffect } from 'react';
import Card from '../Card';

const ListOfNftCards = () => {
  const [dataNft, setDataNft] = useState([]);

  useEffect(() => {
    const fetchAllNFTs = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft/`);
      const nfts = await response.json();
      setDataNft(nfts);
    };
    fetchAllNFTs();
  }, []);

  return (
    <>
      {
        dataNft.map((nft) => {
          return (
            <Card
              key={nft.id}
              id={nft.id}
              userId={nft.userId}
              nftName={nft.name}
              price={nft.price}
              nftImage={nft.imageForNft[0]}
              profileImage1={nft.imageForNft[0]}
              profileImage2={nft.imageForNft[1]}
              profileImage3={nft.imageForNft[2]}
              placeBit={nft.auctionCount}
            />
          );
        }).slice(0, 5)
      }
    </>
  );
};

export default ListOfNftCards;
