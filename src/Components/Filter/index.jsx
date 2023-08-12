import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import './Filter.scss';

const Filter = ({ handleFilter }) => {
  const [filter, setFilter] = useState(false);
  return (
    <div className="filter-secction">
      <div className="product-area">
        <div className="container-filter">
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
                  onClick={() => { return setFilter(!filter); }}
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
                  <select
                    name="likes"
                    id="likes"
                    defaultValue="DEFAULT"
                    className="h6"
                    onChange={handleFilter}
                  >
                    <option value="DEFAULT" disabled>Sort By Likes</option>
                    <option value="most">Most Liked</option>
                    <option value="least">Least Liked</option>
                  </select>
                </div>
                <div className="select">
                  <h6>CATEGORY</h6>
                  <select
                    name="category"
                    id="likes"
                    defaultValue="DEFAULT"
                    className="h6"
                    onChange={handleFilter}
                  >
                    <option value="DEFAULT" disabled>Category</option>
                    <option value="all-categories">All Categories</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="video">Video</option>
                    <option value="collectionable">Collectionable</option>
                  </select>
                </div>
                <div className="select">
                  <h6>COLLECTION</h6>
                  <select
                    name="collection"
                    id="likes"
                    defaultValue="DEFAULT"
                    className="h6"
                    onChange={handleFilter}
                  >
                    <option value="DEFAULT" disabled>Collection</option>
                    <option value="all-collections">All Collections</option>
                    <option value="art-decco">Art Decco</option>
                    <option value="bored-ape-yacht-club">BoredApeYachtClub</option>
                    <option value="mutant-ape-yacht-club">MutantApeYachtClub</option>
                    <option value="art-blocks-factory">Art Blocks Factory</option>
                  </select>
                </div>
                <div className="select">
                  <h6>SALE TYPE</h6>
                  <select
                    name="type"
                    id="likes"
                    defaultValue="DEFAULT"
                    className="h6"
                    onChange={handleFilter}
                  >
                    <option value="DEFAULT" disabled>Sale tipe</option>
                    <option value="all-type">All Type</option>
                    <option value="fixed-price">Fixed price</option>
                    <option value="timed">Timed auction</option>
                    <option value="no-sale">Not for sale</option>
                    <option value="oppen-offer">Open for offers</option>
                  </select>
                </div>
                <div className="select">
                  <h6>
                    {' '}
                    {' '}
                    PRICE RANGE
                  </h6>
                  <div className="slider-wrapper ">
                    <input
                      name="price"
                      type="range"
                      min="0"
                      max="100"
                      step="any"
                      className="h6 sliderBlue range"
                      onChange={handleFilter}
                    />
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
