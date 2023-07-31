import './OurCollection.scss';
import { Link } from 'react-router-dom';
import Inner from '../../Components/Inner';
import ListOfCardCollection from '../../Components/ListOfCardCollection';

const OurCollection = () => {
  return (
    <div className="collection-container">
      <Inner page="Collection" />
      <div className="cards-collection-container">
        <ListOfCardCollection />
      </div>
      <div className="padding-btn-pagination">
        <div className="pagination">
          <Link className="pagination__button" to="#top">Previous</Link>
          <Link className="pagination__button-selected" to="#top">1</Link>
          <Link className="pagination__button" to="#top">2</Link>
          <Link className="pagination__button" to="#top">3</Link>
          <Link className="pagination__button" to="#top">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
