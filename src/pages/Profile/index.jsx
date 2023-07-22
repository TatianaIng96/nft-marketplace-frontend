import './Profile.scss';
import { useState } from 'react';
import {
  FaTwitter, FaUserPlus, FaShareAlt, FaEllipsisH, FaEdit, FaUserCircle,
} from 'react-icons/fa';
import { ModalShare, ModalReport } from '../../Components/ModalShare';
import Card from '../../Components/Card';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [isActive, setIsActive] = useState(null);

  const handleClick = (buttonId) => {
    setIsActive(buttonId);
  };

  return (
    <div className="profile-secction">
      <div className="cover-secction">
        <img
          alt="Slider BG"
          sizes="100vw"
          srcSet="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;
          w=640&amp;q=100 640w,https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;
          w=750&amp;q=100 750w, https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=828&amp;q=100 828w,
          https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=1080&amp;q=100 1080w,
          https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=1200&amp;q=100 1200w,
          https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=1920&amp;q=100 1920w,
          https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=2048&amp;q=100 2048w,
          https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=3840&amp;q=100 3840w"
          src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fbg%2Fbg-image-9.jpg&amp;w=3840&amp;q=100"
          decoding="async"
          data-nimg="fill"
          className="cover"
        />
      </div>
      <div className="author">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              <div className="author-inner">
                <div className="user">
                  <img
                    alt="MRS SUNAYRA AHSAN"
                    srcSet="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbanner-06.png&amp;w=256&amp;q=75 1x,
                    https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbanner-06.png&amp;w=384&amp;q=75 2x"
                    src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbanner-06.png&amp;w=384&amp;q=75"
                    width="140"
                    height="140"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    className="img-profile"
                  />
                </div>
                <div className="info-profile">
                  <h4 className="title"> MRS SUNAYRA AHSAN</h4>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social">
                    <i className="i-twitter">
                      {' '}
                      <FaTwitter />
                    </i>
                    <span className="user-name">it0bsession</span>
                  </a>
                  <div className="follow-area">
                    <div className="follow-followers">
                      <span>
                        186K
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                          className="color-body"
                        >
                          followers

                        </a>
                      </span>
                    </div>
                    <div className="follow-followers">
                      <span>
                        156
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noreferrer"
                          className="color-body"
                        >
                          following

                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="author-button">
                    <span className="btn at-fell f-button">
                      <i className="user-plus">
                        <FaUserPlus />
                        {' '}
                        Follow
                      </i>
                    </span>
                    <button type="button" className="btn at-fell f-button" onClick={() => setIsOpen(true)}>
                      <i>
                        {' '}
                        <FaShareAlt />
                      </i>
                    </button>
                    <div className="mn">
                      <div className="show-more-options btn at-fell f-button">
                        <button type="button" onClick={() => setShowOptions(!showOptions)} className="show-more">
                          <i>
                            <FaEllipsisH />
                          </i>
                        </button>
                        <div className={showOptions ? 'menu-options-hide' : 'menu-options-show'}>
                          <button type="button" onClick={() => setIsOpen(true)}>Share</button>
                          <button type="button" onClick={() => setOpenModalReport(true)}>Report</button>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="btn at-fell f-button" onClick={() => setIsOpen(true)}>
                      <i>
                        {' '}
                        <FaEdit />
                      </i>
                    </button>
                  </div>
                </div>
                {isOpen && <ModalShare setIsOpen={setIsOpen} />}
                {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}
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
                    onClick={() => handleClick(1)}
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
