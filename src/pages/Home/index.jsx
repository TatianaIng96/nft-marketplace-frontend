import { useEffect, useState } from 'react';
import './Home.scss';
import Carousel from 'better-react-carousel';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import { cardData } from '../../assets/data';

const Home = () => {
  const [dataNft, setDataNft] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1199);

  useEffect(() => {
    setDataNft(cardData);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1199);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="container">
        <div className="main-text">
          <h2>Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
          <p>
            Partner with one of the world&apos;s
            largest retailers to showcase your brand and products.
          </p>

          <div className="buttons">
            <Button
              value="Get Started"
            />
            <Button
              className="button-gray"
              value="Create"
            />
          </div>
        </div>

        <div className="main-image">
          <img src="https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider-1.png&w=1200&q=75" alt="main" />
        </div>
      </div>
      <div className="live-nft">
        <div className="title">
          <span className="loader" />
          <h3>Live Bidding</h3>
        </div>
        <div className="card-gallery">
          {isSmallScreen
            ? (
              <Carousel rows={1} showDots dotColorActive="#00A3FF">
                {
                  dataNft.map((nft) => (
                    <Carousel.Item key={nft.id}>
                      <Card
                        totalLikes={nft.totalLikes}
                        nftName={nft.nftName}
                        price={nft.price}
                        nftImage={nft.nftImage}
                        profileImage1={nft.profileImage1}
                        profileImage2={nft.profileImage2}
                        profileImage3={nft.profileImage3}
                        placeBit={nft.placeBit}
                      />
                    </Carousel.Item>
                  ))
                }
              </Carousel>
            )
            : dataNft.map((nft) => (
              <Card
                key={nft.id}
                totalLikes={nft.totalLikes}
                nftName={nft.nftName}
                price={nft.price}
                nftImage={nft.nftImage}
                profileImage1={nft.profileImage1}
                profileImage2={nft.profileImage2}
                profileImage3={nft.profileImage3}
                placeBit={nft.placeBit}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
