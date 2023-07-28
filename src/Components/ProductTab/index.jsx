import './ProductTab.scss';

const ProductTab = () => {
  return (
    <div className="tab-secction">
      <div className="product-tab">
        <div className="tab-inner">
          <div className="nav">
            <button type="button" role="tab" className="link">
              <div className="span tumb">
                <img
                  alt="Product"
                  src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Flg%2Fportfolio-02.jpg&amp;w=384&amp;q=75"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link">
              <div className="span tumb">
                <img
                  alt="Product"
                  src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Flg%2Fportfolio-02.jpg&amp;w=384&amp;q=75"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  className="image"
                />
              </div>
            </button>
            <button type="button" role="tab" className="link">
              <div className="span tumb">
                <img
                  alt="Product"
                  src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Flg%2Fportfolio-02.jpg&amp;w=384&amp;q=75"
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
                  src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Flg%2Fportfolio-02.jpg&amp;w=384&amp;q=75"
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
