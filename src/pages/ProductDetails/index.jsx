import { useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Inner from '../../Components/Inner';
import './ProductDetails.scss';
import { ModalShare, ModalReport } from '../../Components/ModalShare';
import { cardData, sellerData } from '../../assets/data';
import TopSeller from '../../Components/TopSeller';

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [data, setData] = useState(cardData[0]);
  const [likes, setLikes] = useState(data.totalLikes);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(sellerData);
  }, []);

  const handleLikes = () => {
    if (likes === data.totalLikes) {
      setLikes(likes + 1);
      // setData({ ...data, totalLikes: data.totalLikes + 1 });
    } else {
      setLikes(likes - 1);
      // setData({ ...data, totalLikes: data.totalLikes - 1 });
    }
  };

  return (
    <div className="product-secction">
      <Inner page="Product Details" />
      <div className="product-details">
        <div className="container">
          <div className="row">
            <div className="wrapper">
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
            <div className="column">
              <div className="row">
                <div className="title-area">
                  <h4 className="title">Delta25</h4>
                  <div className="rew">
                    <div className="heart">
                      <button type="button" className="like-button" onClick={() => { return handleLikes(); }}>
                        <span className={likes === data.totalLikes ? 'like-icon-number' : 'like-icon-number-selected'}>
                          {likes === data.totalLikes ? <BsHeart /> : <BsHeartFill />}
                          {likes}
                        </span>
                      </button>
                    </div>
                    <div className="mn">
                      <div className="show-more-options btn at-fell f-button">
                        <button type="button" onClick={() => { return setShowOptions(!showOptions); }} className="show-more">
                          <i>
                            <FaEllipsisH />
                          </i>
                        </button>
                        <div className={showOptions ? 'menu-options-hide' : 'menu-options-show'}>
                          <button type="button" onClick={() => { return setIsOpen(true); }}>Share</button>
                          <button type="button" onClick={() => { return setOpenModalReport(true); }}>Report</button>
                        </div>
                      </div>
                      {isOpen && <ModalShare setIsOpen={setIsOpen} />}
                      {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}
                    </div>
                  </div>
                </div>
                <span className="span-bid">
                  "Height-bid"
                  <span className="price">
                    0.334
                    wETH
                  </span>
                </span>
                <h6 className="title-name">#22 Portal , Info bellow</h6>
                <div className="category-collection">
                  <div className="category">
                    <span>
                      Category
                      <span className="color-body">
                        10% royalties
                      </span>
                    </span>
                    <div className="top-seller">
                      <div className="top-seller__title">
                        <div className="top-seller__content">
                          {
                            sellers.slice(0, 1).map((seller) => {
                              return (
                                <TopSeller
                                  key={seller.id}
                                  sellerImage={seller.image}
                                  sellerName={seller.name}
                                />
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection">
                    <span>
                      Collection
                    </span>
                    <div className="top-seller">
                      <div className="top-seller__title">
                        <div className="top-seller__content">
                          {
                            sellers.slice(1, 2).map((seller) => {
                              return (
                                <TopSeller
                                  key={seller.id}
                                  sellerImage={seller.image}
                                  sellerName={seller.name}
                                />
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="a-btn"
                  href="#top"
                >
                  <span>Unlockable content included</span>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
