import './NotFound.scss';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';

const NotFound = () => {
  return (
    <Layout>
      <div className="error-container">
        <div className="text-section">
          <h2>Oh no! Error 404</h2>
          <h3>
            Maybe Nft&apos;s prices has broken this page.
          </h3>
          <div className="button-home-1">
            <p>Back to the home page</p>
            <Button to="/" value="Click here" />
          </div>
        </div>

        <div className="image-section">
          <img src="../../../public/not-found.png" alt="Not found" />
        </div>

        <div className="button-home-2">
          <p>Back to the home page</p>
          <Button to="/" value="Click here" />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
