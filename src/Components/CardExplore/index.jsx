import { useEffect, useState } from 'react';
import Card from '../Card';
import './CardExplore.scss';

const CardExplore = () => {
  const [dataNft, setDataNft] = useState([]);

  useEffect(() => {
    const fetchAllNFTs = async () => {
      const response = await fetch('http://localhost:8080/api/nft/');
      const nfts = await response.json();
      const auctionCount = nfts.map((item) => {
        return {
          ...item,
          auctionCount: item.auction.length,
        };
      });
      setDataNft(auctionCount);
    };
    fetchAllNFTs();
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
