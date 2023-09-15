import './SearchedItem.scss';
import { Link } from 'react-router-dom';

const SearchedItem = ({ element }) => {
  return (
    <div className="searched-item">
      <Link to={element.email ? `/profile/${element.id}` : `/product-details/${element.id}`}>
        <img src={element.image} alt="" />
      </Link>
      <Link to={element.email ? `/profile/${element.id}` : `/product-details/${element.id}`}>
        <h3>{element.name}</h3>
      </Link>
    </div>
  );
};

export default SearchedItem;
