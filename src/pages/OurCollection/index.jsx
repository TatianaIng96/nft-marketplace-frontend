import './OurCollection.scss';
import Inner from '../../Components/Inner';
import ListOfCardCollection from '../../Components/ListOfCardCollection';
import Pagination from '../../Components/Pagination';
import TopArrow from '../../Components/TopArrow';

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
      <TopArrow />
    </div>
  );
};

export default OurCollection;
