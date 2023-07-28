import { useState} from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { cardData } from '../../assets/data';
import './Heart.scss';

const Heart = () => {
  const [data, setData] = useState(cardData[0]);
  const [likes, setLikes] = useState(data.totalLikes);

  const handleLikes = () => {
    if (likes === data.totalLikes) {
      setLikes(likes + 1);
    // setData({ ...data, totalLikes: data.totalLikes + 1 });
    } else {
      setLikes(likes - 1);
    // setData({ ...data, totalLikes: data.totalLikes - 1 });
    }
  };

  return (
    <div className="heart-secction">
      <div className="heart">
        <button type="button" className="like-button" onClick={() => { return handleLikes(); }}>
          <span className={likes === data.totalLikes ? 'like-icon-number' : 'like-icon-number-selected'}>
            {likes === data.totalLikes ? <BsHeart /> : <BsHeartFill />}
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Heart;
