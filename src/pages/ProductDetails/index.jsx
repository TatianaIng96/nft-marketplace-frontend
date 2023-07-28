import { useState, useEffect } from 'react';
import Inner from '../../Components/Inner';
import './ProductDetails.scss';
import ProductTab from '../../Components/ProductTab';
import Heart from '../../Components/Heart';
import MoreOption from '../../Components/MoreOption';
import CategoryCollection from '../../Components/CategoyCollection';
import { cardData } from '../../assets/data';

const ProductDetails = () => {
  const [isActive, setIsActive] = useState(0);
  const [dataBirds, setDataBirds] = useState([]);
  const [dataDetails, setDataDetails] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const buton = ['Birds', 'Details', 'History'];
  const data = [dataBirds, dataDetails, dataHistory];

  useEffect(() => {
  }, []);

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };

  return (
    <div className="product-secction">
      <Inner page="Product Details" />
      <div className="product-details">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <ProductTab />
            </div>
            <div className="column">
              <div className="row">
                <div className="title-area">
                  <h4 className="title">Delta25</h4>
                  <div className="rew">
                    <Heart />
                    <MoreOption />
                  </div>
                </div>
                <span className="span-bid">
                  Height-bid
                  <span className="price">
                    0.334
                    wETH
                  </span>
                </span>
                <h6 className="title-name">#22 Portal , Info bellow</h6>
                <CategoryCollection />
                <a
                  className="a-btn"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
