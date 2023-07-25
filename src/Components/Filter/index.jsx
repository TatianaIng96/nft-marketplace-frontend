import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import './Filter.scss';

const Filter = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div className="filter-secction">
      <div className="product-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="column">
              <h3 className="title"> Explore Product</h3>
            </div>
            <div className="column">
              <div className="filter">
                <button
                  type="button"
                  // eslint-disable-next-line quotes
                  className={filter === true ? "buttonfilter" : "buttonfilter_open"}
                  // eslint-disable-next-line no-undef
                  onClick={() => setFilter(!filter)}
                >
                  Filter
                  {' '}
                  {filter === true ? <FaFilter /> : '  x'}
                </button>
              </div>
            </div>
          </div>
          <div className={filter === true ? 'closed' : 'wrapper'}>
            <div className="inner">
              <div className="filter-select">
                <div className="select">
                  <h6>LIKES</h6>
                  <select name="Likes" id="likes" defaultValue="DEFAULT" className="h6">
                    <option value="DEFAULT" disabled>Sort By Likes</option>
                    <option value="opcion1">Most Liked</option>
                    <option value="opcion2">Least Liked</option>
                  </select>
                </div>
                <div className="select">
                  <h6>CATEGORY</h6>
                  <select name="Likes" id="likes" defaultValue="DEFAULT" className="h6">
                    <option value="DEFAULT" disabled>Category</option>
                    <option value="opcion1">All Category</option>
                    <option value="opcion2">Art</option>
                    <option value="opcion3">Music</option>
                    <option value="opcion4">Video</option>
                    <option value="opcion4">Collectionable</option>
                  </select>
                </div>
                <div className="select">
                  <h6>COLLECTION</h6>
                  <select name="Likes" id="likes" defaultValue="DEFAULT" className="h6">
                    <option value="DEFAULT" disabled>Collection</option>
                    <option value="opcion1">All Collection</option>
                    <option value="opcion2">Art Decco</option>
                    <option value="opcion3">BoredApeYachtClub</option>
                    <option value="opcion4">MutantApeYachtClub</option>
                    <option value="opcion4">Art Blocks Factory</option>
                  </select>
                </div>
                <div className="select">
                  <h6>SALE TYPE</h6>
                  <select name="Likes" id="likes" defaultValue="DEFAULT" className="h6">
                    <option value="DEFAULT" disabled>Sale tipe</option>
                    <option value="opcion1">All Type</option>
                    <option value="opcion2">Fixed price</option>
                    <option value="opcion3">Timed auction</option>
                    <option value="opcion4">Not for sale</option>
                    <option value="opcion4">Open for offers</option>
                  </select>
                </div>
                <div className="select">
                  <h6>
                    {' '}
                    {' '}
                    PRICE RANGE
                  </h6>
                  <div className="slider-wrapper ">
                    <input type="range" min="0" max="3.14" step="any" className="h6 sliderBlue range" />
                  </div>
                  <span className="span">
                    Price: $0- $100
                    <span className="spanB">FILTER</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Filter;
