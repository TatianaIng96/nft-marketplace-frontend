import { useState, useEffect } from 'react';
import { collectionData } from '../../assets/data';
import CardCollection from '../CardCollection';

const ListOfCardCollection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(collectionData);
  }, []);
  console.log(collections);

  return (
    <>
      {collections.map((collection) => {
        return (
          <CardCollection
            key={collection.id}
            mainImage={collection.mainImage}
            profileImage={collection.profileImage}
            littleImage1={collection.littleImage1}
            littleImage2={collection.littleImage2}
            littleImage3={collection.littleImage3}
          />
        );
      })}
    </>
  );
};

export default ListOfCardCollection;
