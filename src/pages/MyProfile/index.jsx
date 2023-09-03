/* eslint-disable quote-props */
import './MyProfile.scss';
import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import Cover from '../../Components/Cover';
import AuthorInner from '../../Components/AuthorInner';
import MyInfoProfile from '../../Components/MyInfoProfile';

const MyProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

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

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft`, fetchConfig);
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

  useEffect(() => {
    async function fetchUser() {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/single`, fetchConfig);
        const fetchedUser = await response.json();
        setUser(fetchedUser);
        setLoading(false);
      } catch (error) {
        alert({ message: error.message });
      }
    }
    fetchUser();
  }, []);

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-secction">
      <div className="cover-secction">
        <Cover
          image={user.coverImage.length === 0 ? 'https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&w=1920&q=100' : user.coverImage[0].url}
        />
      </div>
      <div className="author">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <div className="author-inner">
                <div className="user">
                  <AuthorInner
                    image={user.profileImage.length === 0 ? 'https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbanner-06.png&w=384&q=75' : user.profileImage[0].url}
                  />
                </div>
                <div className="info-profile">
                  <MyInfoProfile
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                  />
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
                              userId={nft.userId}
                              nftName={nft.name}
                              price={nft.price}
                              nftImage={nft.imageForNft[0]}
                              profileImage1={nft.imageForNft[0]}
                              profileImage2={nft.imageForNft[1]}
                              profileImage3={nft.imageForNft[2]}
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

export default MyProfile;
