import './Inner.scss';

const Inner = ({ page }) => {
  return (
    <div className="inner-secction">
      <div className="inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="column">
              <h5 className="text-explore">{page}</h5>
            </div>
            <div className="column">
              <ul className="list">
                <li>Home</li>
                <li className="separator">
                  {' > '}
                </li>
                <li className="exp">{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inner;
