import './Profile.scss';
import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import Cover from '../../Components/Cover';
import AuthorInner from '../../Components/AuthorInner';
import InfoProfile from '../../Components/InfoProfile';

// import { cardData } from '../../assets/data';

const Profile = () => {
  const [isActive, setIsActive] = useState(0);
  const [dataSale, setDataSale] = useState([]);
  const [dataOwed, setDataOwed] = useState([]);
  const [dataCreated, setDataCreated] = useState([]);
  const [dataLiked, setDataLiked] = useState([]);
  const buton = ['On Sale', 'Owned', 'Created', 'Liked'];
  const data = [dataSale, dataOwed, dataCreated, dataLiked];
  useEffect(() => {
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch('http://localhost:8080/api/nft', fetchConfig);
      const dataCard = await response.json();
      const likeCount = dataCard.map((item) => {
        return {
          ...item,
          likeCoun: item.like.length,
        };
      });
      const auctionCount = likeCount.map((item) => {
        return {
          ...item,
          auctionCount: item.auction.length,
        };
      });
      setDataSale(auctionCount);
      setDataOwed(auctionCount);
      setDataCreated(auctionCount);
      setDataLiked(auctionCount);
    }
    fetchData();
  }, []);

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };

  return (
    <div className="profile-secction">
      <div className="cover-secction">
        <Cover />
      </div>
      <div className="author">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <div className="author-inner">
                <div className="user">
                  <AuthorInner />
                </div>
                <div className="info-profile">
                  <InfoProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="card-seccion">
        <div className="container">
          <div className="row">
            <div className="wrapper-option">
              <div className="cards">
                {
                  data.map((dato, index) => {
                    return (
                      isActive === index && (dato.map((nft) => {
                        return (
                          <React.Fragment key={nft.id}>
                            <Card
                              id={nft.id}
                              totalLikes={nft.likeCoun}
                              nftName={nft.name}
                              price={nft.price}
                              nftImage={nft.image[0]}
                              profileImage1={nft.image[0]}
                              profileImage2={nft.image[1]}
                              profileImage3={nft.image[2]}
                              placeBit={nft.auctionCount}
                            />

                          </React.Fragment>
                        );
                      }))
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
