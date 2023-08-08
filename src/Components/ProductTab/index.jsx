import { useState, useEffect } from 'react';
import { cardData } from '../../assets/data';
import './ProductTab.scss';

const ProductTab = () => {
  const [dataNft, setDataNft] = useState([]);
  useEffect(() => {
    setDataNft(cardData[0]);
  }, []);
  const [panel, setPanel] = useState(dataNft.nftImage);

  const handleClick = (image) => {
    setPanel(image);
  };
  return (
    <div className="tab-secction">
      <div className="product-tab">
        <div className="tab-inner">
          <div className="nav">
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(dataNft.nftImage); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={dataNft.nftImage}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(dataNft.profileImage1); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={dataNft.profileImage1}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(dataNft.profileImage2); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={dataNft.profileImage2}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
          </div>
          <div className="content">
            <div className="tab-pane">
              <div className="tum">
                <img
                  alt="Product"
                  src={panel || dataNft.nftImage}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
