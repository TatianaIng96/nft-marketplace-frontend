import './CardStep.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CardStep = () => (
  <div className="card-step">
    <a href="#top">
      <div className="step-number">
        <h4>
          STEP-01
        </h4>
      </div>

      <div className="content">
        <h2 className="title">Set up your wallet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis velit blanditiis sunt modi illo quisquam
        </p>
        <a className="row" href="#top">
          <AiOutlineArrowRight />
        </a>
      </div>

      <div className="icon">
        <img src="https://nuron-nextjs.vercel.app/images/icons/shape-7.png" alt="icon card" />
      </div>
    </a>
  </div>
);

export default CardStep;
