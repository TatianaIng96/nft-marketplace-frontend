import './TopArrow.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';

const TopArrow = () => {
  return (
    <div className="top-arrow">
      <a className="arrow" href="#top">
        <AiOutlineArrowUp />
      </a>
    </div>
  );
};

export default TopArrow;
