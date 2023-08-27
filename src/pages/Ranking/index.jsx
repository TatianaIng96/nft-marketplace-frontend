/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import './Ranking.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FiBriefcase } from 'react-icons/fi';
import { rankingData } from '../../assets/data';
import Inner from '../../Components/Inner';
import Pagination from '../../Components/Pagination';

const Ranking = () => {
  const navigate = useNavigate();
  const [dataOfRannking, setDataOfRanking] = useState([]);

  useEffect(() => {
    setDataOfRanking(rankingData);
  }, []);

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

        <div className="ranking-table">
          <table className="table">
            <thead className="table-head">
              <tr>
                <th className="table-head-section">
                  <span>SL</span>
                </th>
                <th className="table-head-section">
                  <span>Product</span>
                </th>
                <th className="table-head-section">
                  <span>Volume</span>
                </th>
                <th className="table-head-section">
                  <span>24h%</span>
                </th>
                <th className="table-head-section">
                  <span>7d%</span>
                </th>
                <th className="table-head-section">
                  <span>Floor Price</span>
                </th>
                <th className="table-head-section">
                  <span>Owners</span>
                </th>
                <th className="table-head-section">
                  <span>Items</span>
                </th>
              </tr>
            </thead>
            <tbody className="table-body">
              {
                dataOfRannking.map((ranking, index) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={index}>
                      <td className="table-body-section">
                        <span>
                          {index + 1}
                          .
                        </span>
                      </td>
                      <td className="table-body-section table-img-section">
                        <Link to="/our-collection">
                          <img src={ranking.productImg} alt="ranking" />
                        </Link>
                        <span>Secure 25</span>
                      </td>
                      <td className="table-body-section"><span>{ranking.volume}</span></td>
                      <td className="table-body-section">
                        <span className={ranking.firstPercentage.startsWith('-') ? 'red-letter' : 'green-letter'}>
                          {ranking.firstPercentage}
                        </span>
                      </td>
                      <td className="table-body-section">
                        <span className={ranking.secondPercentage.startsWith('-') ? 'red-letter' : 'green-letter'}>
                          {ranking.secondPercentage}
                        </span>
                      </td>
                      <td className="table-body-section"><span>{ranking.price}</span></td>
                      <td className="table-body-section"><span>{ranking.owners}</span></td>
                      <td className="table-body-section"><span>{ranking.items}</span></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="padding-btn-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Ranking;
