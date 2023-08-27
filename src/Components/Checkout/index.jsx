/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
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
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // const transactionErrors = {
  //   'Your card has insufficient funds.': () => { return alert('No tienes fondos suficientes'); },
  // };

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
        console.log(error);
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

      const response = await fetch('http://localhost:8080/api/transactions', fetchConfig);
      if (response.ok) {
        alert('Payment success');
      }
    } catch ({ response }) {
      // transactionErrors[response.data.message]();
      console.log(response);
      // if (response.data.message === 'Your card has insufficient funds.') {
      //   alert('No tienes fondos suficientes');
      // }
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
    </div>
  );
};

export default Checkout;
