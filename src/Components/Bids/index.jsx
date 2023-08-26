/* eslint-disable quote-props */
import { useState, useEffect } from 'react';
import BitArea from '../BitArea';
import './Bids.scss';
import { sellerData } from '../../assets/data';
import BitSeller from '../BitSeller';

const Bids = ({ auctionId }) => {
  const [sellers, setSellers] = useState(sellerData);

  useEffect(() => {
    const fetchAllBids = async () => {
      const fetchConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const response = await fetch(`http://localhost:8080/api/bid/${auctionId}`, fetchConfig);
      const bids = await response.json();
      setSellers(bids);
    };
    fetchAllBids();
  }, []);
  return (
    <div className="bid-secction">
      <div className="top-seller">
        <div className="top-seller__title">
          <div className="top-seller__content">
            {
              sellers.map((seller) => {
                return (
                  <BitSeller
                    key={seller.id}
                    sellerImage={sellerData[0].image}
                    sellerName={seller.user?.firstName}
                    bit={seller?.amount || 10}
                    hours={seller?.createdAt || 12}
                    place={false}
                  />

                );
              })
            }
          </div>
        </div>
      </div>
      {sellers[0].auction
      && (
      <BitArea
        minAmount={sellers[0].auction?.minAmount}
        finishDate={sellers[0].auction?.finishDate}
        nftOwnerId={sellers[0].auction?.nftOwnerId}
      />
      )}
    </div>
  );
};

export default Bids;
