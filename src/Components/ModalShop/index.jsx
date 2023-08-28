/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useJwt } from 'react-jwt';
import './ModalShop.scss';
import useForm from '../../hooks/useForm';

const ModalShop = ({ isOpen, onClose, auctionId }) => {
  const { decodedToken } = useJwt(localStorage.getItem('token'));

  const { object, handleChange } = useForm({});
  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (decodedToken) {
      const data = {
        ...object,
        userId: decodedToken.id,
        auctionId,
      };

      data.amount = parseFloat(data.amount);

      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };

      await fetch('http://localhost:8080/api/bid', fetchConfig);
      onClose();
    }
  };

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
              <form className="modal-body form" onSubmit={handleSubmit} action="">
                <p className="parraf">You are about to purchase This Product Form Nuron</p>
                <div className="placebid">
                  <h5 className="bit-title">Your bid</h5>
                  <div className="bid-content">
                    <div className="">
                      <div className="bid-content-left">

                        <label htmlFor="amount">
                          <input className="input" type="number" onChange={handleChange} name="amount" id="amount" />
                          <span className="span-bit">wETH</span>
                        </label>

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
                  <button className="place" type="submit">Place a bid</button>
                  <button className="cancel" type="button" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ModalShop;
