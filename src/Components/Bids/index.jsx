import { useState, useEffect } from 'react';
import { cardData, sellerData } from '../../assets/data';
import './Bids.scss';
import BitSeller from '../BitSeller';
import CountdownTimer from '../CountdownTimer';

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
      <div className="bit-area">
        <div className="bet-create">
          <div className="winning">
            <h6 className="title">Winning bit</h6>
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
            <h6 className="title">Auction has ended</h6>
            <div>
              <CountdownTimer />
            </div>
            <button type="button" className="place-bit">
              <span>Place a Bid</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
