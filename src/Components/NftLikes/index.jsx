import React, { useEffect, useState } from 'react';
import Card from '../Card';

const NftLikes = ({ likeNftIds }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        };
        const promises = likeNftIds.map(async (nftId) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/nft/${nftId}`,
            fetchConfig,
          );

          if (!response.ok) {
            throw new Error(`Error al obtener datos de NFT para ID: ${nftId}`);
          }
          const nft = await response.json();

          nft.key = nftId;
          return nft;
        });

        const results = await Promise.all(promises);
        // const nftData = {};
        // results.forEach((data, index) => {
        //   const nftId = nftIds[index];
        //   nftData[nftId] = data;
        // });
        setData(results);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos de NFT:', error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {(data.map((nft) => {
        return (
          <React.Fragment key={nft.id}>
            <Card
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

          </React.Fragment>
        );
      }))}
    </>
  );
};

export default NftLikes;
