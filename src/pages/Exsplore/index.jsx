import './Explore.scss';
import { useState } from 'react';
import Inner from '../../Components/Inner';
import Filter from '../../Components/Filter';
import CardExplore from '../../Components/CardExplore';

const Explore = () => {
  const [search, setSearch] = useState({});

  const handleFilter = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  return (
    <div className="explore-secction">
      <Inner />
      <Filter handleFilter={handleFilter} />
      <CardExplore />
    </div>
  );
};

export default Explore;
