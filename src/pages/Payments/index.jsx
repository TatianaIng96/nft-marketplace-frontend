/* eslint-disable import/no-extraneous-dependencies */
import './Payments.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Inner from '../../Components/Inner';
import Checkout from '../../Components/Checkout';

const stripePromise = loadStripe('pk_test_51Nj6XbJqY41QVKYBys55bLk1dZ1DR0ECkmHv9iHoZWalRYNT5D93S2aexV345d8rj4q7iNK4GyqL1TCC0EAKOCVV00kvnKGtvq');
const Payments = () => {
  return (
    <div className="payments-secction">
      <Inner page="Conect Wallet" />
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Payments;
