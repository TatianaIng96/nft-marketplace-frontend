/* eslint-disable no-nested-ternary */
import './SearchedItem.scss';
import { Link } from 'react-router-dom';
import { useJwt } from 'react-jwt';

const SearchedItem = ({ element }) => {
  const { decodedToken } = useJwt(localStorage.getItem('token'));

  return (
    <div className="searched-item">
      <Link to={element.email ? (element.id === decodedToken?.id ? '/my-profile' : `/profile/${element.id}`) : `/product-details/${element.id}`}>
        <img src={element.image} alt="Avatar/nft" />
      </Link>
      <Link to={element.email ? (element.id === decodedToken?.id ? '/my-profile' : `/profile/${element.id}`) : `/product-details/${element.id}`}>
        <h3>{element.name}</h3>
      </Link>
    </div>
  );
};

export default SearchedItem;
