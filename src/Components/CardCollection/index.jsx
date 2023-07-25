import './CardCollection.scss';

const CardColection = () => {
  return (
    <div className="card-collection">
      <a href="#top">
        <div className="main-image">
          <img className="hover-image" src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fcollection-lg-01.jpg&w=1080&q=75" alt="main" />
        </div>

        <div className="gallery-images">
          <div className="single-image">
            <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fcollection-lg-01.jpg&w=1080&q=75" alt="gallery" />
          </div>

          <div className="single-image">
            <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fcollection-lg-01.jpg&w=1080&q=75" alt="gallery" />
          </div>

          <div className="single-image">
            <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fcollection-lg-01.jpg&w=1080&q=75" alt="gallery" />
          </div>
        </div>

        <div className="profile-image">
          <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcollection%2Fcollection-lg-01.jpg&w=1080&q=75" alt="profile" />
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
