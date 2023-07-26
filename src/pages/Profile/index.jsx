import './Profile.scss';
import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import Cover from '../../Components/Cover';
import AuthorInner from '../../Components/AuthorInner';
import InfoProfile from '../../Components/InfoProfile';
import cardData from '../../assets/data';

const Profile = () => {
  const [isActive, setIsActive] = useState(0);
  const [dataSale, setDataSale] = useState([]);
  const [dataOwed, setDataOwed] = useState([]);
  const [dataCreated, setDataCreated] = useState([]);
  const [dataLiked, setDataLiked] = useState([]);

  const buton = ['On Sale', 'Owned', 'Created', 'Liked'];
  const data = [dataSale, dataOwed, dataCreated, dataLiked];

  useEffect(() => {
    setDataSale(cardData);
    setDataOwed(cardData);
    setDataCreated(cardData);
    setDataLiked(cardData);
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
                          <Card
                            key={nft.id}
                            totalLikes={nft.totalLikes}
                            nftName={nft.nftName}
                            price={nft.price}
                            nftImage={nft.nftImage}
                            profileImage1={nft.profileImage1}
                            profileImage2={nft.profileImage2}
                            profileImage3={nft.profileImage3}
                            placeBit={nft.placeBit}
                          />
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
