/* eslint-disable quote-props */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Inner from '../../Components/Inner';
import './ProductDetails.scss';
import ProductTab from '../../Components/ProductTab';
import Heart from '../../Components/Heart';
import MoreOption from '../../Components/MoreOption';
import CategoryCollection from '../../Components/CategoyCollection';
import Bids from '../../Components/Bids';
import HistoryBids from '../../Components/HistoryBits';
import RecentCard from '../../Components/RecentCard';
import Details from '../../Components/Details';
import Winner from '../../Components/Winner';

const ProductDetails = () => {
  const [isActive, setIsActive] = useState(4);
  const buton = ['Bids', 'Details', 'History', 'Winner'];
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch(`http://localhost:8080/api/nft/${id}`, fetchConfig);
      const dataCard = await response.json();
      setData(dataCard);
    }
    fetchData();
  }, [data]);

  const finishDate = new Date(data?.auction[0].finishDate);
  const currentDate = new Date();

  const handleClick = (buttonId) => {
    if (data?.auction.length > 0 && buttonId === 0) {
      setIsActive(buttonId);
    } else if (data?.auction.length <= 0 && buttonId === 1) {
      setIsActive(1);
    } else if (data?.auction.length > 0 && buttonId === 1) {
      setIsActive(1);
    } else if (data?.auction.length > 0 && buttonId === 2) {
      setIsActive(2);
    } else if (data?.auction.length > 0 && buttonId === 3) {
      setIsActive(3);
    }
  };

  const handleModal = (spanId, bool) => {
    const modal = document.getElementById(spanId);
    // eslint-disable-next-line no-unused-expressions
    modal.hidden = bool;
  };

  return (
    <div>
      <div className="product-secction">
        <Inner page="Product Details" />
        <div className="product-details">
          <div className="container">
            <div className="row">
              <div className="wrapper">
                <ProductTab images={data?.imageForNft} />
              </div>
              <div className="column">
                <div className="row">
                  <div className="title-area">
                    <h4 className="title">{data?.name}</h4>
                    <div className="rew">
                      <Heart id={id} />
                      <MoreOption />
                    </div>
                  </div>
                  <span className="span-bid">
                    Height-bid
                    <span className="price">
                      {data?.price}
                      wETH
                    </span>
                  </span>
                  <h6 className="title-name">#22 Portal , Info bellow</h6>
                  <CategoryCollection royalty={data?.royalty} />
                  <a
                    className="a-btn"
                    onClick={() => { return handleModal('modal', false); }}
                    href="#top"
                  >
                    <span>Unlockable content included</span>

                  </a>
                  <div className="author-profile">
                    <div className="container">
                      <div className="row">
                        <div className="wrapper-option">
                          <nav className="button-option">
                            <div className="nav-button">
                              {buton.map((element, index) => {
                                return (
                                  <button
                                    type="button"
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    className={isActive === index ? 'mi-boton active' : 'mi-boton'}
                                    onClick={() => { return handleClick(index); }}
                                  >
                                    {element}
                                  </button>
                                );
                              })}
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {isActive === 0 && finishDate > currentDate ? (<Bids auctionId={data?.auction[0].id || 1} />) : ''}
                    {isActive === 1 && <Details />}
                    {isActive === 2 && <HistoryBids auctionId={data?.auction[0].id || 1} />}
                    {isActive === 3
                      ? (
                        <Winner
                          auctionId={data?.auction[0].id || 1}
                          finishDate={finishDate}
                          currentDate={currentDate}
                        />
                      ) : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RecentCard title="Recent View" />
        </div>
        <div>
          <RecentCard title="Related Item" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
