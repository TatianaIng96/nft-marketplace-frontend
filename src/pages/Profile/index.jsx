import './Profile.scss';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../Components/Card';
import Cover from '../../Components/Cover';
import AuthorInner from '../../Components/AuthorInner';
import InfoProfile from '../../Components/InfoProfile';

function Profile() {
  const [isActive, setIsActive] = useState(null);
  const [button, SetButton] = useState('OnSale');
  const handleClick = (buttonId, name) => {
    setIsActive(buttonId);
    SetButton(name);
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
                  <button
                    type="button"
                    className={isActive === 1 ? 'mi-boton active' : 'mi-boton'}
                    onClick={() => handleClick(1, 'OnSale')}
                  >
                    On Sale
                  </button>
                  <button
                    type="button"
                    className={isActive === 2 ? 'mi-boton active' : 'mi-boton'}
                    onClick={() => handleClick(2)}
                  >
                    Owned
                  </button>
                  <button
                    type="button"
                    className={isActive === 3 ? 'mi-boton active' : 'mi-boton'}
                    onClick={() => handleClick(3)}
                  >
                    Created
                  </button>
                  <button
                    type="button"
                    className={isActive === 4 ? 'mi-boton active' : 'mi-boton'}
                    onClick={() => handleClick(4)}
                  >
                    Liked
                  </button>
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
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
                <Card nftName="Juan" price={1234} nftImage="../public/design2.webp" profileImage={<FaUserCircle />} placeBit={89} address="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
