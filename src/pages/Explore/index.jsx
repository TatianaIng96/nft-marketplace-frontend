import './Explore.scss';
import { useState } from 'react';
import Inner from '../../Components/Inner';
import Filter from '../../Components/Filter';
import CardExplore from '../../Components/CardExplore';
import useForm from '../../hooks/useForm';

const Explore = () => {
  const { object, handleChange } = useForm({});
  const [data, setData]= useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(object);
  };

  return (
    <div className="explore-secction">
      <Inner page="Explore Filter" />
      <Filter handleFilter={handleChange} handleSubmit={handleSubmit} />
      <CardExplore filterCard={data} />
    </div>
  );
};

export default Explore;
