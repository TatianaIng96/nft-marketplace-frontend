/* eslint-disable quote-props */
import './Profile.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cover from '../../Components/Cover';
import AuthorInner from '../../Components/AuthorInner';
import InfoProfile from '../../Components/InfoProfile';
import NftOwners from '../../Components/NftOwner';
import NftCreated from '../../Components/NftCreated';
import NftOnSale from '../../Components/NftOnSale';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [nftIds, setNftIds] = useState([]);
  const [isActive, setIsActive] = useState(2);
  const buton = ['On Sale', 'Owned', 'Created'];

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

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}`, fetchConfig);
        const fetchedUser = await response.json();
        setUser(fetchedUser);
        setLoading(false);
      } catch (error) {
        alert({ message: error.message });
      }
    }
    fetchUser();
    if (Object.keys(user).length !== 0) {
      const nftIdOwner = user.nftOwner.map((nft) => { return nft.nftId; });
      setNftIds(nftIdOwner);
    }
  }, [user]);

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
                    image={user.profileImage.length === 0 ? '../../profile-image.png' : user.profileImage[0].url}
                  />
                </div>
                <div className="info-profile">
                  <InfoProfile
                    firstName={user.firstName}
                    lastName={user.lastName}
                    email={user.email}
                    userId={user.id}
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
                {isActive === 0 && <NftOnSale nftIds={nftIds} />}
                {isActive === 1 && <NftOwners nftIds={nftIds} />}
                {isActive === 2 && <NftCreated userId={user.id} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
