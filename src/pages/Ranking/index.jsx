import './Ranking.scss';
import { Link } from 'react-router-dom';
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
            <tbody className="table-body">
              <tr>
                <td className="table-body-section"><span>1.</span></td>
                <td className="table-body-section table-img-section">
                  <Link to="/our-collection">
                    <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-05.jpg&w=128&q=75" alt="ranking" />
                  </Link>
                  <span>Secure 25</span>
                </td>
                <td className="table-body-section"><span>7,50,000</span></td>
                <td className="table-body-section"><span> -310.63%</span></td>
                <td className="table-body-section"><span>+62.21%</span></td>
                <td className="table-body-section"><span> 33.02</span></td>
                <td className="table-body-section"><span>3k</span></td>
                <td className="table-body-section"><span>10k</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
