/* eslint-disable quote-props */
import { useState, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import './Winner.scss';
import { Link } from 'react-router-dom';
import { sellerData } from '../../assets/data';
import BitSeller from '../BitSeller';

const Winner = ({ auctionId, finishDate, currentDate }) => {
  const [sellers, setSellers] = useState();
  const [loading, setLoading] = useState(true);
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState('');
  const [pay, setPay] = useState(false);
  const { decodedToken } = useJwt(localStorage.getItem('token'));
  const [data, setData] = useState();

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
        setMessage(`Error fetching data: ${error.message}`);
      }
    };

    fetchAllBids();
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      if (loading === false) {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft/${sellers.nft.id}`, fetchConfig);
        const dataNft = await response.json();
        setData(dataNft);
      }
    }
    fetchData();
    if (sellers) {
      if (sellers.bid.length > 0) {
        if (finishDate <= currentDate && decodedToken) {
          if (decodedToken.id === sellers.bid[0].user.id) {
            setPay(true);
            if (data) {
              if (data.nftOwner[0]?.user.id === decodedToken.id) {
                setPay(false);
              }
            }
          } else {
            setPay(false);
          }
        }
      }
    }
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
    <div className="winer-secction">
      <div className="top-seller">
        <div className="top-seller__title">
          <div className="top-seller__content">
            {sellers.bid.lenght !== 0 ? (
              sellers.bid?.map((seller) => {
                return (
                  <BitSeller
                    key={seller.id}
                    sellerImage={seller.user?.profileImage[0]?.url || sellerData[0].image}
                    sellerName={seller.user?.firstName}
                    bit={seller?.amount || 10}
                    hours={seller?.createdAt || 12}
                    place={false}
                  />

                );
              }).slice(0, 1)) : <div> not bid...</div>}
          </div>
        </div>
      </div>
      {pay
        && (
          <Link to={`/payments/${auctionId}`}>
            <button className="pay" type="button">Pay</button>
          </Link>
        )}
    </div>
  );
};

export default Winner;
