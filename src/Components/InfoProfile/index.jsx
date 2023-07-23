import { useState } from 'react';
import {
  FaTwitter, FaUserPlus, FaShareAlt, FaEllipsisH, FaEdit,
} from 'react-icons/fa';
import { ModalShare, ModalReport } from '../ModalShare';

function InfoProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalReport, setOpenModalReport] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  return (
    <>
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
      {isOpen && <ModalShare setIsOpen={setIsOpen} />}
      {openModalReport && <ModalReport setOpenModalReport={setOpenModalReport} />}
    </>
  );
}

export default InfoProfile;
