/* eslint-disable radix */
/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useJwt } from 'react-jwt';
import { useState, useEffect } from 'react';
import './ModalShop.scss';
import Modal from 'react-modal';
import useForm from '../../hooks/useForm';

Modal.setAppElement('#root');
const ModalShop = ({ isOpen, onClose, auctionId }) => {
  const { decodedToken } = useJwt(localStorage.getItem('token'));
  const { object, handleChange } = useForm({});
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const inputChange = () => {
      if (object && object.amount !== undefined) {
        setBalance(object.amount);
      }
    };

    inputChange();
  }, [object]);

  if (!isOpen) return null;

  const handleChangeInput = (e) => {
    const { value } = e.target;
    if (/^\d+$/.test(value)) {
      handleChange(e);
    }
    if (value === '') {
      setBalance(0);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (decodedToken) {
      const data = {
        ...object,
        userId: decodedToken.id,
        auctionId,
      };

      data.amount = parseFloat(data.amount) + 1;

      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };

      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/bid`, fetchConfig);
      onClose();
    }
    setBalance(0);
  };

  const isButtonDisabled = balance === 0;

  return (
    <div className="shop-secction">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Ejemplo de Modal"
        className="shop-secction"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
      >
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
                          <input
                            className="input"
                            type="number"
                            onChange={handleChangeInput}
                            name="amount"
                            id="amount"
                          />
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
                        <span className="left">
                          {balance}
                          {' '}
                          wETH
                        </span>
                        <span className="left">1 wETH</span>
                        <span className="left-t">
                          {parseInt(`${balance}`) + 1 || 1}
                          {' '}
                          wETH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={isButtonDisabled ? 'bit-button-desabled' : 'bit-button'}>
                  <button
                    className="place"
                    type="submit"
                    disabled={isButtonDisabled}
                  >
                    Place a bid

                  </button>
                  <button
                    className="cancel"
                    type="button"
                    onClick={() => {
                      setBalance(0);
                      onClose();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalShop;
