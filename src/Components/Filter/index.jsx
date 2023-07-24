import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import './Filter.scss';

function Filter() {
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
                  <h6>Likes</h6>
                  <select name="Likes" id="likes">
                    <option value="" disabled selected>Sort By Likes</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                  </select>
                </div>
                <div className="select">
                  <h6>Likes</h6>
                  <select name="Likes" id="likes">
                    <option value="" disabled selected>Sort By Likes</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                  </select>
                </div>
                <div className="select">
                  <h6>Likes</h6>
                  <select name="Likes" id="likes">
                    <option value="" disabled selected>Sort By Likes</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                  </select>
                </div>
                <div className="select">
                  <h6>Likes</h6>
                  <select name="Likes" id="likes">
                    <option value="" disabled selected>Sort By Likes</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                  </select>
                </div>
                <div className="select">
                  <h6>Likes</h6>
                  <select name="Likes" id="likes">
                    <option value="" disabled selected>Sort By Likes</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                    <option value="opcion4">Opción 4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Filter;
