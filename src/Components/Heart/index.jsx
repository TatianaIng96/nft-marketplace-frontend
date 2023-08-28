import { useState, useEffect } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useJwt } from 'react-jwt';
import './Heart.scss';

const Heart = ({ id }) => {
  const like = 0;
  const [data, setData] = useState(false);
  const [likes, setLikes] = useState(like);
  const { decodedToken } = useJwt(localStorage.getItem('token'));

  useEffect(() => {
    async function fetchData() {
      const fetchConfig = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      const response = await fetch(`http://localhost:8080/api/like/${id}`, fetchConfig);
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
  }, [likes]);

  const handleLikes = async () => {
    if (data === false) {
      const fetchConfigForm = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`http://localhost:8080/api/like/${id}`, fetchConfigForm);
      setLikes(likes + 1);
    } else {
      const fetchConfigForm = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      await fetch(`http://localhost:8080/api/like/${id}`, fetchConfigForm);
      setLikes(likes - 1);
    }
    setData(!data);
  };

  return (
    <div className="heart-secction">
      <div className="heart">
        <button type="button" className="like-button" onClick={() => { return handleLikes(); }}>
          <span className={data === false ? 'like-icon-number' : 'like-icon-number-selected'}>
            {data === false ? <BsHeart /> : <BsHeartFill />}
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Heart;
