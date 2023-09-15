/* eslint-disable quote-props */
import './SearchResults.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchedItem from '../../Components/SearchedItem';

const SearchResults = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const stringForFilter = searchParams.get('search').toLowerCase();

  const [dataToRender, setDataToRender] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfigUsers = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    const fetchData = async () => {
      const nftsResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft/all`);
      const nftsPromise = nftsResponse.json();
      const usersResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`, fetchConfigUsers);
      const usersPromise = usersResponse.json();

      const [nftsData, usersData] = await Promise.all([nftsPromise, usersPromise]);

      const allData = [];

      const nftsToAdd = nftsData.map((nft) => {
        return {
          ...nft,
          image: nft.imageForNft[0],
        };
      });
      nftsToAdd.map((nft) => { return allData.push(nft); });

      const usersToAdd = usersData.map((user) => {
        return {
          ...user,
          name: `${user.firstName} ${user.lastName}`,
          image: user.profileImage.length === 0 ? '../../../public/profile-image.png' : user.profileImage[0].url,
        };
      });
      usersToAdd.map((user) => { return allData.push(user); });

      const dataToShow = allData.filter((element) => {
        return element.name.toLowerCase().split(' ').includes(stringForFilter);
      });

      setDataToRender(dataToShow);
      setLoading(false);
    };
    fetchData();
  }, [stringForFilter]);

  if (loading) {
    return <div className="message">Loading...</div>;
  }

  if (dataToRender.length === 0) {
    return <div className="message">No results were found</div>;
  }

  return (
    <div className="search-results-container">
      {
        dataToRender.map((element) => {
          return (
            <SearchedItem
              key={element.id}
              element={element}
            />
          );
        })
      }
    </div>
  );
};

export default SearchResults;
