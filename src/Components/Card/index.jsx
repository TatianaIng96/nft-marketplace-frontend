import { useState, useEffect } from 'react';
import { useJwt } from 'react-jwt';
import { Link } from 'react-router-dom';
import './Card.scss';
import 'sweetalert2/dist/sweetalert2.min.css';
import { FaEllipsisH, FaTrash } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { ModalShare, ModalReport } from '../ModalShare';
// import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';

const Card = ({
  id,
  userId,
  nftName,
  price,
  nftImage,
  profileImage1,
  profileImage2,
  profileImage3,
  placeBit,
}) => {
  // const { isAdmin } = useContext(UsersAndNFTsContext);

  const role = localStorage.getItem('role');

  let isAdmin = false;
  if (role === 'ADMIN') {
    isAdmin = true;
  }

  // const [likes, setLikes] = useState(totalLikes);
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const like = 0;
  const [data, setData] = useState(false);
  const [likes, setLikes] = useState(like);
  const [profileId, setProfileId] = useState(userId);
  const { decodedToken } = useJwt(localStorage.getItem('token'));

  useEffect(() => {
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch(`http://localhost:8080/api/like/${id}`, fetchConfig);
      const dataCard = await response.json();

      if (decodedToken) {
        const idUser = decodedToken.id;
        const userLike = dataCard.some((item) => { return item.userId === idUser; });
        setData(userLike);
        setProfileId(idUser);
      }

      const likeCount = {
        ...dataCard,
        likeCount: dataCard.length,
      };
      setLikes(likeCount.likeCount);
    }
    fetchData();
  }, [likes]);

  const handleLikes = async () => {
    if (data === false) {
      const fetchConfigForm = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`http://localhost:8080/api/like/${id}`, fetchConfigForm);
      setLikes(likes + 1);
    } else {
      const fetchConfigForm = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`http://localhost:8080/api/like/${id}`, fetchConfigForm);
      setLikes(likes - 1);
    }
    setData(!data);
  };

  useEffect(() => {
    const closeOptionWhenClickOut = (e) => {
      if (showOptions && !e.target.closest('.show-more-options')) {
        setShowOptions(false);
      }
    };
    document.addEventListener('click', closeOptionWhenClickOut);

    return () => {
      document.removeEventListener('click', closeOptionWhenClickOut);
    };
  }, [showOptions]);

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error',
        );
      }
    });
  };

  return (
    <div className="card">
      <section className="image-section">
        <Link to={`/product-details/${id}`}>
          <img src={nftImage} alt="img test" />
        </Link>
      </section>

      <div className="nft-info">
        <section className="profiles-info">
          <div className="profile-share">
            <div className="profiles">
              <Link to="/profile">
                <img src={profileImage1} alt="nft" />
              </Link>
              <Link to="/profile">
                <img src={profileImage2} alt="nft" />
              </Link>
              <Link to="/profile">
                <img src={profileImage3} alt="nft" />
              </Link>
            </div>

            <Link to="/profile">
              {placeBit}
              + place Bit.
            </Link>
          </div>

          <div className="show-more-options">
            {!isAdmin && (
              <button type="button" onClick={() => { setShowOptions(!showOptions); }} className="show-more">
                <FaEllipsisH />
              </button>
            )}
            {isAdmin && (
              <button
                type="button"
                onClick={handleDelete}
                className="show-more"
              >
                <FaTrash />
              </button>
            )}
            <div className={!showOptions ? 'menu-options-hide' : 'menu-options-show'}>
              <button type="button" onClick={() => { setIsOpen(true); }}>Share</button>
              <button type="button" onClick={() => { setOpenModalReport(true); }}>Report</button>
            </div>
          </div>
        </section>
        {isOpen && <ModalShare setIsOpen={setIsOpen} />}
        {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}

        <article className="nft-name">
          <Link to={profileId === userId ? '/my-profile/' : `/profile/${userId}`}>
            {' '}
            {nftName}
            {' '}
          </Link>
          <h4>Highest bid 1/20</h4>
        </article>

        <section className="nft-price">
          <span className="price">
            {price}
            wETH
          </span>
          <button type="button" className="like-button" onClick={handleLikes}>
            <span className={data === false ? 'like-icon-number' : 'like-icon-number-selected'}>
              {data === false ? <BsHeart /> : <BsHeartFill />}
              {likes}
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Card;
