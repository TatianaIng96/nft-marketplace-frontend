import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitter, FaUserPlus, FaShareAlt, FaEllipsisH, FaEdit,
} from 'react-icons/fa';
import { ModalShare, ModalReport } from '../ModalShare';

const InfoProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  return (
    <div>
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
        <button type="button" className="btn at-fell f-button" onClick={() => { return setIsOpen(true); }}>
          <i>
            {' '}
            <FaShareAlt />
          </i>
        </button>
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
        </div>
        <Link to="/edit-profile-image">
          <button type="button" className="btn at-fell f-button">
            <i>
              {' '}
              <FaEdit />
            </i>
          </button>
        </Link>
      </div>
      {isOpen && <ModalShare setIsOpen={setIsOpen} />}
      {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}
    </div>
  );
};

export default InfoProfile;
