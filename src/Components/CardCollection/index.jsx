import './CardCollection.scss';

const CardColection = ({
  mainImage,
  littleImage1,
  littleImage2,
  littleImage3,
  profileImage,
}) => {
  return (
    <div className="card-collection">
      <a href="#top">
        <div className="main-image">
          <img className="hover-image" src={mainImage} alt="main" />
        </div>

        <div className="gallery-images">
          <div className="single-image">
            <img src={littleImage1} alt="gallery" />
          </div>

          <div className="single-image">
            <img src={littleImage2} alt="gallery" />
          </div>

          <div className="single-image">
            <img src={littleImage3} alt="gallery" />
          </div>
        </div>

        <div className="profile-image">
          <img src={profileImage} alt="profile" />
        </div>

        <div className="text">
          <h3 className="title">Cubic Trad</h3>
          <button type="button" className="items">27 items</button>
        </div>
      </a>
    </div>
  );
};

export default CardColection;
