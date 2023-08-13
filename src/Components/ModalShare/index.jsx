import './ModalShare.scss';
import {
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

export const ModalShare = ({ setIsOpen }) => {
  return (
    <div className="dark-bg">
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h2 className="modal-header-title">Share this NFT</h2>
          </div>

          <div className="socials">
            <a className="social-link" href="#top">
              <div className="social-button">
                <span className="social-logo">
                  <FiFacebook />
                </span>
                <p className="social-name">Facebook</p>
              </div>
            </a>
            <a className="social-link" href="#top">
              <div className="social-button">
                <span className="social-logo">
                  <FiTwitter />
                </span>
                <p className="social-name">Twitter</p>
              </div>
            </a>
            <a className="social-link" href="#top">
              <div className="social-button">
                <span className="social-logo">
                  <FiLinkedin />
                </span>
                <p className="social-name">LinkedIn</p>
              </div>
            </a>
            <a className="social-link" href="#top">
              <div className="social-button">
                <span className="social-logo">
                  <FiInstagram />
                </span>
                <p className="social-name">Instagram</p>
              </div>
            </a>
            <a className="social-link" href="#top">
              <div className="social-button">
                <span className="social-logo">
                  <FiYoutube />
                </span>
                <p className="social-name">Youtube</p>
              </div>
            </a>
          </div>
          <button type="button" className="close-modal" onClick={() => { return setIsOpen(false); }}>
            <AiOutlineClose style={{ marginBottom: '-3px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ModalReport = ({ setOpenModalReport }) => {
  return (
    <div className="dark-bg-report">
      <div className="centered">
        <div className="modal">
          <div className="modal-header">
            <h2 className="modal-header-title">Why are you reporting?</h2>
          </div>

          <div className="form">
            <textarea className="message" name="message" id="" cols="30" rows="10" placeholder="Write your report" />
            <div className="buttons">
              <button type="button" className="buttons-report button-report">Report</button>
              <button type="button" className="buttons-report button-close" onClick={() => { return setOpenModalReport(false); }}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
