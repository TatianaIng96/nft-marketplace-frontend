/* eslint-disable quote-props */
import { useState, useEffect } from 'react';
import '../Bids/Bids.scss';
import { sellerData } from '../../assets/data';
import BitSeller from '../BitSeller';

const HistoryBids = ({ auctionId }) => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAllBids = async () => {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auctions/${auctionId}`, fetchConfig);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const bids = await response.json();
        setSellers(bids);
        setLoading(false);
      } catch (error) {
        setMessageExists(true);
        setMessage('Error fetching data:', error);
      }
    };

    fetchAllBids();
  }, [sellers]);

  if (loading) {
    return <div>Loading...</div>;
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
    <div className="bid-secction">
      <div className="top-seller">
        <div className="top-seller__title">
          <div className="top-seller__content">
            {sellers.bid.lenght !== 0 ? (
              sellers.bid?.map((seller) => {
                return (
                  <BitSeller
                    key={seller.id}
                    sellerImage={seller.user.profileImage[0].url || sellerData[0].image}
                    sellerName={seller.user?.firstName}
                    bit={seller?.amount || 10}
                    hours={seller?.createdAt || 12}
                    place={false}
                  />

                );
              })) : <div> not bid...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBids;
