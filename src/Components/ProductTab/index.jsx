import { useState, useEffect } from 'react';
import { cardData } from '../../assets/data';
import './ProductTab.scss';

const ProductTab = ({ images }) => {
  const [dataNft, setDataNft] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [panel, setPanel] = useState('');
  useEffect(() => {
    setDataNft(cardData[0]);
    setPanel(images?.[0] || dataNft.nftImage);
  }, []);

  const handleClick = (image) => {
    setPanel(image);
  };
  return (
    <div className="tab-secction">
      <div className="product-tab">
        <div className="tab-inner">
          <div className="nav">
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(images?.[0] || dataNft.nftImage); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={images?.[0] || dataNft.nftImage}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(images?.[1] || dataNft.profileImage1); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={images?.[1] || dataNft.profileImage1}
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link" onClick={() => { return handleClick(images?.[2] || dataNft.profileImage2); }}>
              <div className="span tumb">
                <img
                  alt="Product"
                  src={images?.[2] || dataNft.profileImage2}
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
