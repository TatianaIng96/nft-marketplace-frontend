/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import '../../style/NoData.scss';

const NftOnSale = ({ userId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft/user/auction/${userId}`, fetchConfig);
        const nft = await response.json();
        setData(nft);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos de NFT:', error);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <div className="no-data">Loading...</div>;
  }
  if (data.length === 0) {
    return <div className="no-data">No nfts up for auction</div>;
  }
  return (
    <>
      {data.length !== 0 ? (data.map((nft) => {
        return (
          <React.Fragment key={nft.id}>
            <Card
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
          </React.Fragment>
        );
      })) : <div className="no-nft"> No nfts up for auction </div>}
    </>
  );
};

export default NftOnSale;
