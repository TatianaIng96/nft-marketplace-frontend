import './Explore.scss';
import Inner from '../../Components/Inner';
import Filter from '../../Components/Filter';
import CardExplore from '../../Components/CardExplore';

const Explore = () => (
  <div className="explore-secction">
    <Inner />
    <Filter />
    <CardExplore />
  </div>
);

export default Explore;
