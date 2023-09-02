import './Explore.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inner from '../../Components/Inner';
import Filter from '../../Components/Filter';
import CardExplore from '../../Components/CardExplore';
import useForm from '../../hooks/useForm';

const Explore = () => {
  const { object, handleChange } = useForm({});
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(object);
    const search = queryParams.toString();
    setData(object);
    navigate(`/explore?${search}`);
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
