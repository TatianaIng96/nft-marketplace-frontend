import { useState, useEffect } from 'react';
import { sellerData } from '../../assets/data';
import TopSeller from '../TopSeller';

const ListOfTopSellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(sellerData);
  }, []);

  return (
    <>
      {
        sellers.map((seller) => {
          return (
            <TopSeller
              key={seller.id}
              sellerImage={seller.image}
              sellerName={seller.name}
              sellerNumber={seller.number}
              sellerTop={seller.id}
            />
          );
        })
      }
    </>
  );
};

export default ListOfTopSellers;
