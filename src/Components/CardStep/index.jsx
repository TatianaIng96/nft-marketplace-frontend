import { useState, useEffect } from 'react';
import './CardStep.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { stepData } from '../../assets/data';

const CardStep = ({
  stepNum,
  stepTitle,
  stepText,
  stepImage,
}) => {
  return (
    <div className="card-step">
      <div className="step-number">
        <h4>
          STEP-
          0
          {stepNum}
        </h4>
      </div>

      <div className="content">
        <h2 className="title">{stepTitle}</h2>
        <p>{stepText}</p>
        <a className="row" href="#top">
          <AiOutlineArrowRight />
        </a>
      </div>

      <div className="icon">
        <a href="#top">
          <img src={stepImage} alt="icon card" />
        </a>
      </div>
    </div>
  );
};

const ListOfStepCards = () => {
  const [step, setStep] = useState([]);

  useEffect(() => {
    setStep(stepData);
  }, []);

  return (
    <div className="step-flex">
      {
        step.map((card) => {
          return (
            <CardStep
              key={card.stepNum}
              stepNum={card.stepNum}
              stepTitle={card.stepTitle}
              stepText={card.stepText}
              stepImage={card.stepImage}
            />
          );
        })
      }
    </div>
  );
};

export default ListOfStepCards;
