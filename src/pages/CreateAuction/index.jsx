/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quote-props */
import './CreateAuction.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateTimePicker } from '@mantine/dates';
import Inner from '../../Components/Inner';

import useForm from '../../hooks/useForm';

const CreateAuction = () => {
  const [nfts, setNfts] = useState([]);
  const [user, setUser] = useState([]);
  const [selectDate, setSelectDate] = useState(null);
  const [selectedNft, setSelectedNft] = useState(null);

  const navigate = useNavigate();

  const { object, handleChange } = useForm({});

  useEffect(() => {
    async function fetchNfts() {
      const configFetch = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const [nftsResponse, userResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft`, configFetch),
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/single`, configFetch),
      ]);

      const datanfts = await nftsResponse.json();
      setNfts(datanfts);

      const fetchedUser = await userResponse.json();
      setUser(fetchedUser);
    }
    fetchNfts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const filterNftOwners = user.nftOwner.map((owner) => {
      return owner;
    });

    const auctionData = {
      ...object,
      nft: {
        connect: {
          id: JSON.parse(selectedNft).id,
        },
      },
      nftOwner: {
        connect: {
          id: filterNftOwners[0].id,
        },
      },
      finishDate: selectDate,
      minAmount: parseFloat(object.minAmount),
    };

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(auctionData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auctions`, fetchConfig);

    const convertedNft = JSON.parse(selectedNft);

    navigate(`/product-details/${convertedNft.id}`);
  };

  const filterNfts = nfts.filter((nft) => { return nft.nftOwner[0]?.user.id === user.id; });

  return (
    <div className="auction-section">
      <Inner page="Create Auction" />
      <h2>Create Auction</h2>
      <form className="form" method="post" onSubmit={handleSubmit}>
        <label htmlFor="date">
          Pick date and time to finish the auction
          <input type="text" id="date" className="date-input" />
          <DateTimePicker
            id="date"
            maw={400}
            mx="auto"
            clearable
            minDate={new Date()}
            monthsListFormat="MM"
            yearsListFormat="YY"
            onChange={(value) => { return setSelectDate(value); }}
          />
        </label>
        <label htmlFor="price" className="start-price">
          Price to start
          <input
            type="text"
            id="minAmount"
            name="minAmount"
            required
            onChange={handleChange}
            placeholder="0.25 wETH"
          />
        </label>
        <label htmlFor="nft">
          Choose the NFT you wish to auction
          <select name="nft" id="nft" onChange={(event) => { return setSelectedNft(event.target.value); }}>
            <option value="">Choose an Nft</option>
            {
              filterNfts.map((nft) => {
                return (
                  <option key={nft.id} required value={JSON.stringify(nft)}>
                    {nft.name}
                  </option>
                );
              })
            }
          </select>
        </label>
        <button
          className="send-button-auction"
          type="submit"
        >
          Create Auction
        </button>
      </form>
    </div>
  );
};

export default CreateAuction;
