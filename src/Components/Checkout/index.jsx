/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Checkout.scss';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const transactionErrors = {
    'Your card has insufficient funds.': () => { return alert('No tienes fondos suficientes'); },
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
        console.log(error);
        return;
      }

      const response = await fetch.post(
        'http://localhost:8080/api/checkout',
        {
          paymentMethod,
          amount: Math.floor(10 * 100),
        },
      );

      alert('Gracias por tu compra');
      // navigate(/payment-success)
    } catch ({ response }) {
      transactionErrors[response.data.message]();
      // if(response.data.message === 'Your card has insufficient funds.') {
      //   alert('No tienes fondos suficientes')
      // }
    } finally {
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement,
      ).clear();
    }
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
            2000
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
