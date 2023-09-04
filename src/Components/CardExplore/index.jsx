/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import Card from '../Card';
import './CardExplore.scss';

const CardExplore = ({ filterCard }) => {
  const [dataNft, setDataNft] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllNFTs = async () => {
      setLoading(true);
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const likesParam = encodeURIComponent(filterCard?.likes || 'all');
      const categoryParam = encodeURIComponent(filterCard?.category || 'all');
      const collectionParam = encodeURIComponent(filterCard?.collection || 'all');
      const priceParam = encodeURIComponent(filterCard?.price || 100);

      const url = `${import.meta.env.VITE_API_BASE_URL}/api/nft?likes=${likesParam}&category=${categoryParam}&collection=${collectionParam}&price=${priceParam}`;
      const response = await fetch(url, fetchConfig);
      const nfts = await response.json();
      const auctionCount = nfts.map((item) => {
        return {
          ...item,
          auctionCount: item.auction.length,
        };
      });
      setDataNft(auctionCount);
      setLoading(false);
    };
    fetchAllNFTs();
  }, [filterCard]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
                      nftImage={nft.imageForNft[0].nftImage.url}
                      profileImage1={nft.imageForNft[0].nftImage.url}
                      profileImage2={nft.imageForNft[1].nftImage.url}
                      profileImage3={nft.imageForNft[2].nftImage.url}
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
