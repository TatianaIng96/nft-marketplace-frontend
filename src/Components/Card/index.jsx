import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
import { FaEllipsisH, FaTrash } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { ModalShare, ModalReport } from '../ModalShare';

const Card = ({
  totalLikes,
  nftName,
  price,
  nftImage,
  profileImage1,
  profileImage2,
  profileImage3,
  placeBit,
  admin,
}) => {
  const [likes, setLikes] = useState(totalLikes);
  const [showOptions, setShowOptions] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);

  const handleLikes = () => {
    if (likes === totalLikes) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="card">
      <section className="image-section">
        <img src={nftImage} alt="img test" />
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
            {admin === false && (
            <button type="button" onClick={() => { setShowOptions(!showOptions); }} className="show-more">
              <FaEllipsisH />
            </button>
            )}
            {admin === true && (
            <button type="button" onClick={() => { alert('está seguro'); }} className="show-more">
              <FaTrash />
            </button>
            )}
            <div className={showOptions ? 'menu-options-hide' : 'menu-options-show'}>
              <button type="button" onClick={() => { setIsOpen(true); }}>Share</button>
              <button type="button" onClick={() => { setOpenModalReport(true); }}>Report</button>
            </div>
          </div>
        </section>
        {isOpen && <ModalShare setIsOpen={setIsOpen} />}
        {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}

        <article className="nft-name">
          <Link to="/profile">{nftName}</Link>
          <h4>Highest bid 1/20</h4>
        </article>

        <section className="nft-price">
          <span className="price">
            {price}
            wETH
          </span>
          <button type="button" className="like-button" onClick={handleLikes}>
            <span className={likes === totalLikes ? 'like-icon-number' : 'like-icon-number-selected'}>
              {likes === totalLikes ? <BsHeart /> : <BsHeartFill />}
              {likes}
            </span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Card;
