import './BitArea.scss';
import { useState, useEffect, useRef } from 'react';
import CountdownTimer from '../CountdownTimer';
import BitSeller from '../BitSeller';
import ModalShop from '../ModalShop';

const BitArea = ({
  minAmount, finishDate, nftOwnerId, createdAt, auctionId,
}) => {
  const [seller, setSeller] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  // Utilizar una referencia para rastrear si el componente está montado

  useEffect(() => {
    return () => {
      // Cuando el componente se desmonte, actualizar la referencia
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchAllOwner = async () => {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft-owners/${nftOwnerId}`, fetchConfig);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const ownerData = await response.json();
        if (isMounted.current) {
          // Verificar si el componente todavía está montado antes de actualizar el estado
          setSeller(ownerData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllOwner();
  }, [nftOwnerId]);

  // Renderizar un mensaje de carga mientras se obtienen los datos

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Deshabilitar el scroll en el cuerpo de la página cuando el modal esté abierto
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bit-area">
      <div className="bet-create">
        <div className="winning">
          <h6 className="title1">Winning bit</h6>
          <BitSeller
            key={seller.user.id}
            sellerImage={seller.user.profileImage}
            sellerName={seller.user.firstName}
            bit={minAmount}
            hours={createdAt}
            // eslint-disable-next-line react/jsx-boolean-value
            place={true}
          />
        </div>
        <div className="bid-list">
          <h6 className="title2">Auction has ended</h6>
          <div>
            <CountdownTimer finishDate={finishDate} />
          </div>
          <button type="button" onClick={handleModalOpen} className="place-bit">
            <span>Place a Bid</span>
          </button>
          <ModalShop
            isOpen={modalOpen}
            onClose={handleModalClose}
            auctionId={auctionId}
          />
        </div>
      </div>
    </div>
  );
};

export default BitArea;
