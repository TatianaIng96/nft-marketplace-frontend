import { useState, useEffect } from 'react';
import { sellerData } from '../../assets/data';
import TopSeller from '../TopSeller';
import './CategoryCollection.scss';

const CategoryCollection = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(sellerData);
  }, []);
  return (
    <div className="category-secction">
      <div className="category-collection">
        <div className="category">
          <span>
            Category
            <span className="color-body">
              10% royalties
            </span>
          </span>
          <div className="top-seller">
            <div className="top-seller__title">
              <div className="top-seller__content">
                {
                  sellers.slice(0, 1).map((seller) => {
                    return (
                      <TopSeller
                        key={seller.id}
                        sellerImage={seller.image}
                        sellerName={seller.name}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="collection">
          <span>
            Collection
          </span>
          <div className="top-seller">
            <div className="top-seller__title">
              <div className="top-seller__content">
                {
                  sellers.slice(1, 2).map((seller) => {
                    return (
                      <TopSeller
                        key={seller.id}
                        sellerImage={seller.image}
                        sellerName={seller.name}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CategoryCollection;
