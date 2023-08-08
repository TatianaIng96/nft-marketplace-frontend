import './OurCollection.scss';
import Inner from '../../Components/Inner';
import ListOfCardCollection from '../../Components/ListOfCardCollection';
import Pagination from '../../Components/Pagination';

const OurCollection = () => {
  return (
    <div className="collection-container">
      <Inner page="Collection" />
      <div className="cards-collection-container">
        <ListOfCardCollection />
      </div>
      <div className="padding-btn-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default OurCollection;
