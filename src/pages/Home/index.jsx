import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Carousel } from '@mantine/carousel';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import ListOfStepCards from '../../Components/CardStep';
import ListOfNftCards from '../../Components/ListOfNftCards';
import { cardData } from '../../assets/data';
import ListOfTopSellers from '../../Components/ListOfTopSellers';
import Filter from '../../Components/Filter';
import ListOfCardCollection from '../../Components/ListOfCardCollection';
import TopArrow from '../../Components/TopArrow';

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
              to="/create-nft"
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
              <Carousel
                maw={320}
                mx="auto"
                withIndicators
                withControls={false}
                loop
                breakpoints={[
                  { maxWidth: '767px', slideSize: '50%' },
                  { maxWidth: '575', slideSize: '100%', slideGap: 0 },
                ]}
              >
                {
                  dataNft.map((nft) => {
                    return (
                      <Carousel.Slide key={nft.id}>
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
                      </Carousel.Slide>
                    );
                  })
                }
              </Carousel>
            )
            : <ListOfNftCards />}
        </div>
      </div>

      <div className="step-cards">
        <div className="step-cards__title">
          <h3>Create and sell your NFTs</h3>
        </div>
        <div className="step-cards__section">
          <ListOfStepCards />
        </div>
      </div>

      <div className="newest-section">
        <div className="newest-section__title">
          <h3>Newest Items</h3>
          <a href="#top">
            VIEW ALL
            <AiOutlineArrowRight />
          </a>
        </div>
        <div className="newest-section__list">
          <ListOfNftCards />
        </div>
      </div>

      <div className="top-seller">
        <div className="top-seller__title">
          Top Seller in
          <select name="days" id="day-select" className="select-option">
            <option className="option" value="one-day">1 day</option>
            <option className="option" value="seven-day">7 days</option>
            <option className="option" value="fifteen-day">15 days</option>
            <option className="option" value="thirty-day">30 days</option>
          </select>
        </div>
        <div className="top-seller__content">
          <ListOfTopSellers />
        </div>
      </div>

      <div className="explore-section-home">
        <Filter />
        <div className="cards">
          <ListOfNftCards />
        </div>
      </div>

      <div className="collection">
        <div className="collection__title">
          <h3>Top collection</h3>
          <Link to="/our-collection">
            VIEW ALL
            <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="collection__content">
          <ListOfCardCollection />
        </div>
      </div>

      <TopArrow />
    </div>
  );
};

export default Home;
