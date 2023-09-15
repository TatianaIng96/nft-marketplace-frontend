/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import '../../style/NoData.scss';
import Card from '../Card';

const NftCreated = ({ userId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft/user/${userId}`, fetchConfig);
        const nft = await response.json();
        setData(nft);
        setLoading(false);
      } catch (error) {
        setMessageExists(true);
        setMessage(`Error obtaining NFT data: ${error.message}`);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="no-data">Loading...</div>;
  }

  if (messageExists) {
    return (
      <div className="message">
        {message}
        <button type="button" onClick={() => { return setMessageExists(false); }}>Ok</button>
      </div>
    );
  }

  return (
    <>
      {data.length > 0 ? (data.map((nft) => {
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
      })) : <div className="no-nft"> You have no nfts to show </div>}
    </>
  );
};

export default NftCreated;
