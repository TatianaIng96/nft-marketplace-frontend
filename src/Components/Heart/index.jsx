import { useState, useEffect } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useJwt } from 'react-jwt';
import './Heart.scss';

const Heart = ({ id }) => {
  const like = 0;
  const [data, setData] = useState(false);
  const [likes, setLikes] = useState(like);
  const { decodedToken } = useJwt(localStorage.getItem('token'));

  const handleLikes = async () => {
    if (data === false) {
      const fetchConfigForm = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/like/${id}`, fetchConfigForm);
      setLikes(likes + 1);
    } else {
      const fetchConfigForm = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/like/${id}`, fetchConfigForm);
      setLikes(likes - 1);
    }
    setData(!data);
  };

  useEffect(() => {
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/like/${id}`, fetchConfig);
      const dataCard = await response.json();

      if (decodedToken) {
        const idUser = decodedToken.id;
        const userLike = dataCard.some((item) => { return item.userId === idUser; });
        setData(userLike);
      }

      const likeCount = {
        ...dataCard,
        likeCount: dataCard.length,
      };
      setLikes(likeCount.likeCount);
    }
    fetchData();
  }, [handleLikes]);

  return (
    <div className="heart-secction">
      <div className="heart">
        <button type="button" className="like-button" onClick={() => { return handleLikes(); }}>
          <span className={data ? 'like-icon-number-selected' : 'like-icon-number'}>
            {data ? <BsHeartFill /> : <BsHeart />}
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Heart;
