import './Ranking.scss';
import { FiBriefcase } from 'react-icons/fi';
import Inner from '../../Components/Inner';

const Ranking = () => {
  return (
    <div className="ranking-container">
      <Inner page="Ranking" />
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
            <tbody>
              <tr>
                <td>1.</td>
                <td>Secure 25</td>
                <td>7,50,000</td>
                <td> -310.63%</td>
                <td>+62.21%</td>
                <td>33.02</td>
                <td>3k</td>
                <td>10k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
