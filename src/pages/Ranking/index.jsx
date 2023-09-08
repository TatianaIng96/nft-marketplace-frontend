/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import './Ranking.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FiBriefcase } from 'react-icons/fi';
import Inner from '../../Components/Inner';

const Ranking = () => {
  const [dataOfRanking, setDataOfRanking] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const nftPerPage = 15;

  useEffect(() => {
    const fetchAllNfts = async () => {
      try {
        const fetchConfig = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const nftsResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/nft?page=${currentPage}&pageSize=${nftPerPage}`, fetchConfig);
        const nftData = await nftsResponse.json();
        setDataOfRanking(nftData);

        const userResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users`, fetchConfig);
        const userData = await userResponse.json();
        setUsers(userData);
        const newTotalPages = Math.ceil(dataOfRanking.length / nftPerPage);
        setTotalPages(newTotalPages);
        setLoading(false);
      } catch (error) {
        setCurrentPage(error);
      }
    };
    fetchAllNfts();
  }, [currentPage, nftPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/ranking?page=${newPage}&pageSize=${nftPerPage}`);
  };

  const nftUserInfo = dataOfRanking.map((nft) => nft.userId);
  const filterUserName = users.filter((user) => nftUserInfo.includes(user.id));

  return (
    <div className="ranking-container">
      <Inner page="Ranking" />
      <div className="createUserButton">
        <button type="button" onClick={() => navigate('/admin-create-user')}>Create user</button>
      </div>
      <div className="ranking-padding-container">
        <div className="ranking-title">
          <h4>
            <FiBriefcase />
            The top NFTs on Nuron
          </h4>
        </div>

        {
          loading
            ? (
              <div className="test">
                <span className="loader" />
              </div>
            )
            : (
              <div className="ranking-table">
                <table className="table">
                  <thead className="table-head">
                    <tr>
                      <th className="table-head-section">
                        <span>SL</span>
                      </th>
                      <th className="table-head-section">
                        <span>NFT</span>
                      </th>
                      <th className="table-head-section">
                        <span>Creator</span>
                      </th>
                      <th className="table-head-section">
                        <span>Owner</span>
                      </th>
                      <th className="table-head-section">
                        <span>Price</span>
                      </th>
                      <th className="table-head-section">
                        <span>Commission 💵</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {
                      dataOfRanking.flatMap((nft, index) => {
                        const creator = filterUserName.find((user) => user.id === nft.userId);
                        const itemIndex = (currentPage - 1) * nftPerPage + index + 1;
                        return (
                          <tr key={nft.id}>
                            <td className="table-body-section">
                              <span>
                                {itemIndex}
                                .
                              </span>
                            </td>
                            <td className="table-body-section table-img-section">
                              <Link to={`/product-details/${nft.id}`}>
                                <img src={nft.imageForNft[0].nftImage.url} alt="nft" />
                                <span>{nft.name}</span>
                              </Link>
                            </td>
                            <td className="table-body-section">
                              <Link to={`/profile/${nft.userId}`}>
                                <span>
                                  {creator && creator?.firstName}
                                </span>
                              </Link>
                            </td>
                            <td className="table-body-section">
                              <Link to={`/profile/${nft.userId}`}>
                                <span>
                                  {
                                    nft.nftOwner.length > 0
                                      ? nft.nftOwner.map((nftOwner) => nftOwner.user?.firstName)
                                      : creator?.firstName
                                  }
                                </span>
                              </Link>
                            </td>
                            <td className="table-body-section">
                              <span>
                                {nft.price}
                              </span>
                            </td>
                            <td className="table-body-section">
                              <span>{(nft.price * 2.5) / 100}</span>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            )
        }
      </div>

      <div className="padding-btn-pagination">
        <div className="pagination">
          <button
            type="button"
            className={currentPage === 1 ? 'pagination__button-disabled' : 'pagination__button'}
            onClick={() => {
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p>
            Page:
            {' '}
            {currentPage}
          </p>
          <button
            type="button"
            className={totalPages < currentPage ? 'pagination__button-disabled' : 'pagination__button'}
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage > totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
