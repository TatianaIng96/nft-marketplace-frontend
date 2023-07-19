import './Header.scss';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell, FiSun } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineX } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';

function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const [showSideHome, setShowSideHome] = useState(false);
  const [showSideExplore, setShowSideExplore] = useState(false);
  const [showSidePages, setShowSidePages] = useState(false);
  const [showSideBlog, setShowSideBlog] = useState(false);

  const [showHome, setShowHome] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const toggleHomeList = () => {
    setShowSideHome(!showSideHome);
    setShowSideExplore(false);
    setShowSidePages(false);
    setShowSideBlog(false);
  };
  const toggleExploreList = () => {
    setShowSideHome(false);
    setShowSideExplore(!showSideExplore);
    setShowSidePages(false);
    setShowSideBlog(false);
  };
  const togglePagesList = () => {
    setShowSideHome(false);
    setShowSideExplore(false);
    setShowSidePages(!showSidePages);
    setShowSideBlog(false);
  };
  const toggleBlogList = () => {
    setShowSideHome(false);
    setShowSideExplore(false);
    setShowSidePages(false);
    setShowSideBlog(!showSideBlog);
  };

  const handleHomeHover = () => {
    setShowHome(true);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(false);
  };
  const handleExploreHover = () => {
    setShowHome(false);
    setShowExplore(true);
    setShowPages(false);
    setShowBlog(false);
  };
  const handlePagesHover = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(true);
    setShowBlog(false);
  };
  const handleBlogHover = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(true);
  };
  const handleHideAllLists = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(false);
  };

  return (
    <div className="header-secction">
      <header onMouseLeave={handleHideAllLists}>
        <img src="src/assets/logo-white.png" alt="Nuron logo" />
        <div className="menuOption home" onMouseEnter={handleHomeHover}>
          <p>
            Home
            <BiChevronDown />
          </p>
          <div>
            {showHome
              && (
              <ul
                className="home__list"
                onMouseEnter={handleHomeHover}
                onMouseLeave={() => setShowHome(false)}
              >
                <li>Home Page One</li>
                <li>Home Page Two</li>
                <li>Home Page Three</li>
                <li>Home Page Four</li>
                <li>Home Page Five</li>
              </ul>
              )}
          </div>
        </div>
        <div className="menuOption about">About</div>
        <div className="menuOption explore" onMouseEnter={handleExploreHover}>
          <p>
            Explore
            <BiChevronDown />
          </p>
          {showExplore
            && (
            <ul
              className="explore__list"
              onMouseEnter={handleExploreHover}
              onMouseLeave={() => setShowExplore(false)}
            >
              <li>Explore Filter</li>
              <li>Explore Isotop</li>
              <li>Explore Carousel</li>
              <li>Explore Simple</li>
              <li>Explore Place Bid</li>
              <li>Place Bid With Filter</li>
              <li>Place Bid With Isotop</li>
              <li>Place Bid With Carousel</li>
            </ul>
            )}
        </div>
        <div className="menuOption pages" onMouseEnter={handlePagesHover}>
          <p>
            Pages
            <BiChevronDown />
          </p>
          {showPages
            && (
            <ul
              className="pages__list"
              onMouseEnter={handlePagesHover}
              onMouseLeave={() => setShowPages(false)}
            >
              <li>Create NFT</li>
              <li>Product</li>
              <li>Login</li>
              <li>About Us</li>
              <li>Upload Type</li>
              <li>Registration</li>
              <li>Product Details</li>
              <li>Contact</li>
            </ul>
            )}
        </div>
        <div className="menuOption blog" onMouseEnter={handleBlogHover}>
          <p>
            Blog
            <BiChevronDown />
          </p>
          {showBlog
            && (
            <ul
              className="blog__list"
              onMouseEnter={handleBlogHover}
              onMouseLeave={() => setShowBlog(false)}
            >
              <li>Blog Single Column</li>
              <li>Blog Two Column</li>
              <li>Blog Three Column</li>
              <li>Blog Four Column</li>
              <li>Blog Details</li>
            </ul>
            )}
        </div>
        <span className="menuOption">Contact</span>
        <section className="buttonsContainer">
          <div
            className="iconContainer"
            id="searchShower"
            onClick={() => setShowSearchBar(!showSearchBar)}
            role="button"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setShowSideMenu(false);
              }
            }}
            tabIndex={0}
          >
            <AiOutlineSearch />
          </div>
          <div className="searchInHeaderContainer">
            <input type="text" placeholder="Search..." className="searchInHeader" />
            {/* eslint-disable-next-line */}
            <button type="button" className="searchButtonInHeader"><AiOutlineSearch /></button>
          </div>
          <div><button type="button">Wallet connect</button></div>
          <div className="iconContainer"><FiBell /></div>
          <div
            className="iconContainer"
            id="hamburgerIcon"
            onClick={() => setShowSideMenu(!showSideMenu)}
            role="button"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setShowSideMenu(false);
              }
            }}
            tabIndex={0}
          >
            <RxHamburgerMenu />
          </div>
          <div className="iconContainer"><FiSun /></div>
        </section>

        {showSearchBar
        && (
        <div className="searchBarContainer">
          <input type="text" placeholder="Search..." className="searchInput" />
          {/* eslint-disable-next-line */}
          <button type="button" className="searchButton"><AiOutlineSearch /></button>
        </div>
        )}

        {showSideMenu
        && (
        <section className="sideMenu">
          <div>
            <img src="src/assets/logo-white.png" alt="Nuron logo" className="menuImg" />
            <button type="button" className="xButton" onClick={() => setShowSideMenu(false)}>
              <HiOutlineX />
            </button>
          </div>
          <ul className="menuInMobile">
            <li
              onClick={toggleHomeList}
              role="menuitem"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setShowSideMenu(false);
                }
              }}
              tabIndex={0}
            >
              Home
              {' '}
              <BiChevronDown />
            </li>
            {showSideHome
                && (
                <ul className="sideMenuItems">
                  <li>Home Page One</li>
                  <li>Home Page Two</li>
                  <li>Home Page Three</li>
                  <li>Home Page Four</li>
                  <li>Home Page Five</li>
                </ul>
                )}
            <li>About</li>
            <li
              onClick={toggleExploreList}
              role="menuitem"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setShowSideMenu(false);
                }
              }}
              tabIndex={0}
            >
              Explore
              {' '}
              <BiChevronDown />
            </li>
            {showSideExplore
                && (
                <ul className="sideMenuItems">
                  <li>Explore Filter</li>
                  <li>Explore Isotop</li>
                  <li>Explore Carousel</li>
                  <li>Explore Simple</li>
                  <li>Explore Place Bid</li>
                  <li>Place Bid With Filter</li>
                  <li>Place Bid With Isotop</li>
                  <li>Place Bid With Carousel</li>
                </ul>
                )}
            <li
              onClick={togglePagesList}
              role="menuitem"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setShowSideMenu(false);
                }
              }}
              tabIndex={0}
            >
              Pages
              {' '}
              <BiChevronDown />
            </li>
            {showSidePages
                  && (
                  <ul className="sideMenuItems">
                    <li>Create NFT</li>
                    <li>Product</li>
                    <li>Login</li>
                    <li>About Us</li>
                    <li>Upload Type</li>
                    <li>Registration</li>
                    <li>Product Details</li>
                    <li>Contact</li>
                  </ul>
                  )}
            <li
              onClick={toggleBlogList}
              role="menuitem"
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setShowSideMenu(false);
                }
              }}
              tabIndex={0}
            >
              Blog
              {' '}
              <BiChevronDown />
            </li>
            {showSideBlog
                  && (
                  <ul className="sideMenuItems">
                    <li>Blog Single Column</li>
                    <li>Blog Two Column</li>
                    <li>Blog Three Column</li>
                    <li>Blog Four Column</li>
                    <li>Blog Details</li>
                  </ul>
                  )}
            <li>Contact</li>
          </ul>
        </section>
        )}
      </header>

    </div>
  );
}

export default Header;
