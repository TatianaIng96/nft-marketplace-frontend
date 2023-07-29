import './BitSeller.scss';

const BitSeller = ({
  sellerImage,
  sellerName,
  bit,
  hours,
  place,
}) => {
  return (
    <div className={`bit-seller ${place && 'back'} `}>
      <div className={`sellerb__image  ${place && 'image'}`}>
        <img src={sellerImage} alt="profile" />
      </div>
      <div className="sellerb__info">
        {place === false && (
        <>
          <a href="#top">
            <h4 className="sellerb__info-title">
              <span className="bit">
                {bit}
                wETH  by
                {' '}
              </span>
              {sellerName}
            </h4>
          </a>
          <p className="info-number">
            {' '}
            {hours}
            {' '}
            hours ago
            {' '}
          </p>
        </>
        )}
        {place === true && (
        <>
          <a href="#top">
            <h4 className="info-title">
              <span className="bit">
                Heighest bid
                {' '}
              </span>
              {sellerName}
            </h4>
          </a>
          <p className="number">
            {' '}
            {bit}
            {' '}
            wETH
            {' '}
          </p>
        </>
        )}
      </div>
    </div>
  );
};

export default BitSeller;
