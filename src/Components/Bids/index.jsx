import { useState, useEffect } from 'react';
import BitArea from '../BitArea';
import './Bids.scss';
import { cardData, sellerData } from '../../assets/data';
import BitSeller from '../BitSeller';

const Bids = () => {
  const [sellers, setSellers] = useState(sellerData);
  const [dataNft, setDataNft] = useState(cardData[0]);

  useEffect(() => {
    setSellers(sellerData);
    setDataNft(cardData[0]);
  }, []);
  return (
    <div className="bid-secction">
      <div className="top-seller">
        <div className="top-seller__title">
          <div className="top-seller__content">
            {
              dataNft.bits.slice(0, 7).map((bit) => {
                return (
                  sellers.map((seller) => {
                    return (
                      bit.sellerId === seller.id && (
                      <BitSeller
                        key={seller.id}
                        sellerImage={seller.image}
                        sellerName={seller.name}
                        bit={bit.bit}
                        hours={bit.hours}
                        place={false}
                      />
                      )
                    );
                  })
                );
              })
            }
          </div>
        </div>
      </div>
      <BitArea />
    </div>
  );
};

export default Bids;
