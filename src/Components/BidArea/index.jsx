import './BitArea.scss';
import { useState, useEffect } from 'react';
import { cardData, sellerData } from '../../assets/data';
import CountdownTimer from '../CountdownTimer';
import BitSeller from '../BidSeller';
import ModalShop from '../ModalShop';

const BitArea = () => {
  const [sellers, setSellers] = useState(sellerData);
  const [dataNft, setDataNft] = useState(cardData[0]);
  const [modalOpen, setModalOpen] = useState(false);

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

  useEffect(() => {
    setSellers(sellerData);
    setDataNft(cardData[0]);
  }, []);
  return (
    <div className="bit-area">
      <div className="bet-create">
        <div className="winning">
          <h6 className="title1">Winning bit</h6>
          <BitSeller
            key={sellers[0].id}
            sellerImage={sellers[0].image}
            sellerName={sellers[0].name}
            bit={dataNft.bits[0].bit}
            hours={dataNft.bits[0].hours}
          // eslint-disable-next-line react/jsx-boolean-value
            place={true}
          />
        </div>
        <div className="bid-list">
          <h6 className="title2">Auction has ended</h6>
          <div>
            <CountdownTimer />
          </div>
          <button type="button" onClick={handleModalOpen} className="place-bit">
            <span>Place a Bid</span>
          </button>
          <ModalShop
            isOpen={modalOpen}
            onClose={handleModalClose}
          />
        </div>
      </div>
    </div>
  );
};

export default BitArea;
