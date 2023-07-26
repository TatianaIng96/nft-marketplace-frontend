import './TopSeller.scss';

const TopSeller = ({
  sellerImage,
  sellerName,
  sellerNumber,
  sellerTop,
}) => {
  return (
    <div className="seller">
      <div className="seller__image">
        <img src={sellerImage} alt="profile" />
      </div>
      <div className="seller__info">
        <a href="#top">
          <h4 className="seller__info-title">{sellerName}</h4>
        </a>
        <p className="seller__info-number">{sellerNumber}</p>
      </div>
      <div className="seller__top-number">
        <h2>{sellerTop}</h2>
      </div>
    </div>
  );
};

export default TopSeller;
