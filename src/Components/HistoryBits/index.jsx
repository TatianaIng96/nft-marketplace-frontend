/* eslint-disable quote-props */
import { useState, useEffect } from 'react';
import '../Bids/Bids.scss';
import { sellerData } from '../../assets/data';
import BitSeller from '../BitSeller';

const HistoryBids = ({ auctionId }) => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false); // Cambiar el estado de carga a falso cuando los datos estén disponibles
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllBids();
  }, [sellers]);

  // Renderizar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
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
                    sellerImage={seller.user?.profileImage[0]?.url || sellerData[0].image}
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
