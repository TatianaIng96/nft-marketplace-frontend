/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ModalShop.scss';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import useForm from '../../hooks/useForm';

const ModalShop = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="shop-secction">
      <div className="modal-overlay">
        <div className="modal-content-background" onClick={onClose}>
          <button type="button" className="modal-close" onClick={onClose}>
            X
          </button>
          <div className="modal" onClick={(e) => { return e.stopPropagation(); }}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Place a bid</h3>
              </div>
              <div className="modal-body">
                <p className="parraf">You are about to purchase This Product Form Nuron</p>
                <div className="placebid">
                  <h5 className="bit-title">Your bid</h5>
                  <div className="bid-content">
                    <div className="">
                      <div className="bid-content-left">
                        <input className="input" id="value" type="text" name="value" />
                        <span className="span-bit">wETH</span>
                      </div>
                    </div>
                    <div className="bid-content-mid">
                      <div className="bid-content-left">
                        <span className="left">Your Balance</span>
                        <span className="left">Service fee</span>
                        <span className="left">Total bid amount</span>
                      </div>
                      <div className="">
                        <span className="left">9578 wETH</span>
                        <span className="left">10 wETH</span>
                        <span className="left-t">9588 wETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bit-button">
                  <a href="/payments">
                    <span className="place">Place a bid</span>
                  </a>
                  <button className="cancel" type="button" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModalShop;
