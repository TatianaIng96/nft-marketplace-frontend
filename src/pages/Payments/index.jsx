/* eslint-disable quote-props */
/* eslint-disable import/no-extraneous-dependencies */
import './Payments.scss';
import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Inner from '../../Components/Inner';
import Checkout from '../../Components/Checkout';

const stripePromise = loadStripe('pk_test_51Nj6XbJqY41QVKYBys55bLk1dZ1DR0ECkmHv9iHoZWalRYNT5D93S2aexV345d8rj4q7iNK4GyqL1TCC0EAKOCVV00kvnKGtvq');
const Payments = () => {
  const { id } = useParams();
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
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auctions/${id}`, fetchConfig);
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
    <div className="payments-secction">
      <Inner page="Conect Wallet" />
      <Elements stripe={stripePromise}>
        <Checkout
          amount={sellers.bid[0].amount}
          nftId={sellers.nft.id}
          nftOwnerId={sellers.nftOwner.id}
          buyerId={sellers.bid[0].user.id}
        />
      </Elements>
    </div>
  );
};

export default Payments;
