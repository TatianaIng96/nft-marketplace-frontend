import './OurCollection.scss';
import Inner from '../../Components/Inner';
import ListOfCardCollection from '../../Components/ListOfCardCollection';

const OurCollection = () => {
  return (
    <div className="collection-container">
      <Inner page="Collection" />
      <div className="cards-collection-container">
        <ListOfCardCollection />
      </div>
    </div>
  );
};

export default OurCollection;
