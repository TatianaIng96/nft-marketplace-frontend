/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.scss';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

const Checkout = ({
  amount, nftId, nftOwnerId, buyerId,
}) => {
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const transactionErrors = {
    'Your card has insufficient funds.': () => {
      setMessageExists(true);
      setMessage('Insufficient funds');
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement,
        ),
      });

      if (error) {
        setMessageExists(true);
        setMessage(`Error: ${error.message}`);
        return;
      }
      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify({
          paymentMethod,
          amount: Math.floor(amount * 100),
          nftId,
          nftOwnerId,
          buyerId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/transactions`, fetchConfig);
      if (response.ok) {
        setMessageExists(true);
        setMessage('Payment successful');
      }
    } catch ({ response }) {
      transactionErrors[response.data.message]();
      if (response.data.message === 'Your card has insufficient funds.') {
        setMessageExists(true);
        setMessage('Insufficient funds');
      }
    } finally {
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement,
      ).clear();
    }

    navigate('/my-profile/');
  };
  return (
    <div className="checkout">
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Card Number
          <CardNumberElement className="stripe-input" />
        </label>

        <label>
          Expiration Date
          <CardExpiryElement className="stripe-input" />
        </label>

        <label>
          CVC
          <CardCvcElement className="stripe-input" />
        </label>

        <label className="bid">
          Amount:
          {' '}
          <span className="amount">
            {amount}
            <span className="currency">
              wETH
            </span>
          </span>
        </label>

        <button type="submit" className="payButton"> Pay </button>
      </form>
      {messageExists && (
        <div className="message">
          {message}
          <button type="button" onClick={() => { return setMessageExists(false); }}>Ok</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
