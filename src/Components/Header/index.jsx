import './Header.scss';
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiBell, FiSun} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';
import {HiOutlineX} from 'react-icons/hi';
import {BiChevronDown} from 'react-icons/bi';

const Header = () => {

  const [showSearchBar,setShowSearchBar] = useState(false);
  const [showHeaderOverMenu,setShowHeaderOverMenu] = useState(true);
  const [showMenuOverHeader,setShowMenuOverHeader] = useState(false);

  const [showSideHome,setShowSideHome] = useState(false);
  const [showSideExplore,setShowSideExplore] = useState(false);
  const [showSidePages,setShowSidePages] = useState(false);
  const [showSideBlog,setShowSideBlog] = useState(false);

  const [showHome,setShowHome] = useState(false);
  const [showExplore,setShowExplore] = useState(false);
  const [showPages,setShowPages] = useState(false);
  const [showBlog,setShowBlog] = useState(false);

  const toggleHomeList = () => {
    setShowSideHome(!showSideHome);
    setShowSideExplore(false);
    setShowSidePages(false);
    setShowSideBlog(false);
  }
  const toggleExploreList = () => {
    setShowSideHome(false);
    setShowSideExplore(!showSideExplore);
    setShowSidePages(false);
    setShowSideBlog(false);
  }
  const togglePagesList = () => {
    setShowSideHome(false);
    setShowSideExplore(false);
    setShowSidePages(!showSidePages);
    setShowSideBlog(false);
  }
  const toggleBlogList = () => {
    setShowSideHome(false);
    setShowSideExplore(false);
    setShowSidePages(false);
    setShowSideBlog(!showSideBlog);
  }

  const handleHeaderAndMenu = () => {
    setShowHeaderOverMenu(!showHeaderOverMenu);
    setShowMenuOverHeader(!showMenuOverHeader);
  }
  const handleHomeHover = () => {
    setShowHome(true);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(false);
  }
  const handleExploreHover = () => {
    setShowHome(false);
    setShowExplore(true);
    setShowPages(false);
    setShowBlog(false);
  }
  const handlePagesHover = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(true);
    setShowBlog(false);
  }
  const handleBlogHover = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(true);
  }
  const handleHideAllLists = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(false);
    setShowBlog(false);
  }

  return (
    <>
      {showHeaderOverMenu && 
      <header onMouseLeave={handleHideAllLists}>
        <img src="src/assets/logo-white.png" alt="Nuron logo" />
        <span className='menuInHeader' onMouseEnter={handleHomeHover}>
            Home <BiChevronDown/>
        </span>
        <span className='menuInHeader'>About</span>
        <span className='menuInHeader' onMouseEnter={handleExploreHover}>
            Explore <BiChevronDown/>
        </span>
        <span className='menuInHeader' onMouseEnter={handlePagesHover}>
            Pages <BiChevronDown/>
        </span>
        <span className='menuInHeader' onMouseEnter={handleBlogHover}>
            Blog <BiChevronDown/>
        </span>
        <span className='menuInHeader'>Contact</span>
        <section className='buttonsContainer'>
            <div 
              className='iconContainer' 
              id='searchShower' 
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
                <AiOutlineSearch/>
            </div>
            <div className='searchInHeaderContainer'>
              <input type="text" placeholder='Search...' className='searchInHeader'/>
              <button className='searchButtonInHeader'><AiOutlineSearch/></button>
            </div>
            <div><button>Wallet connect</button></div>
            <div className='iconContainer'><FiBell/></div>
            <div className='iconContainer' id='hamburgerIcon' onClick={handleHeaderAndMenu}>
                <RxHamburgerMenu/>
            </div>
            <div className='iconContainer'><FiSun/></div>
        </section>
      </header>}

      {showSearchBar && 
      <div className='searchBarContainer'>
        <input type="text" placeholder='Search...' className='searchInput'/>
        <button className='searchButton'><AiOutlineSearch/></button>
      </div>}

      {showMenuOverHeader && 
      <div className='hamburgerMenu'>
        <div>
          <img src="src/assets/logo-white.png" alt="Nuron logo" className='menuImg'/>
          <button className='xButton' onClick={handleHeaderAndMenu}>
            <HiOutlineX/>
          </button>
        </div>
        <ul className='menuInMobile'>
          <li onClick={toggleHomeList}>
            Home <BiChevronDown/>
          </li>
            {showSideHome && 
            <ul>
              <li>Home Page One</li>
              <li>Home Page Two</li>
              <li>Home Page Three</li>
              <li>Home Page Four</li>
              <li>Home Page Five</li>
            </ul>}
          <li>About</li>
          <li onClick={toggleExploreList}>
            Explore <BiChevronDown/>
          </li>
            {showSideExplore && 
            <ul>
              <li>Explore Filter</li>
              <li>Explore Isotop</li>
              <li>Explore Carousel</li>
              <li>Explore Simple</li>
              <li>Explore Place Bid</li>
              <li>Place Bid With Filter</li>
              <li>Place Bid With Isotop</li>
              <li>Place Bid With Carousel</li>
            </ul>}
          <li onClick={togglePagesList}>
            Pages <BiChevronDown/>
          </li>
            {showSidePages &&
              <ul>
                <li>Create NFT</li>
                <li>Product</li>
                <li>Login</li>
                <li>About Us</li>
                <li>Upload Type</li>
                <li>Registration</li>
                <li>Product Details</li>
                <li>Contact</li>
              </ul>}
          <li onClick={toggleBlogList}>
            Blog <BiChevronDown/>
          </li>
            {showSideBlog &&
              <ul>
                <li>Blog Single Column</li>
                <li>Blog Two Column</li>
                <li>Blog Three Column</li>
                <li>Blog Four Column</li>
                <li>Blog Details</li>
              </ul>}
          <li>Contact</li>
        </ul>
      </div>}

      {showHome &&
      <ul className='homeList' 
          onMouseEnter={handleHomeHover} 
          onMouseLeave={() => setShowHome(false)}
      >
        <li>Home Page One</li>
        <li>Home Page Two</li>
        <li>Home Page Three</li>
        <li>Home Page Four</li>
        <li>Home Page Five</li>
      </ul>}

      {showExplore &&
      <ul className='exploreList' 
          onMouseEnter={handleExploreHover} 
          onMouseLeave={() => setShowExplore(false)}>
        <li>Explore Filter</li>
        <li>Explore Isotop</li>
        <li>Explore Carousel</li>
        <li>Explore Simple</li>
        <li>Explore Place Bid</li>
        <li>Place Bid With Filter</li>
        <li>Place Bid With Isotop</li>
        <li>Place Bid With Carousel</li>
      </ul>}

      {showPages &&
      <ul className='pagesList' 
          onMouseEnter={handlePagesHover} 
          onMouseLeave={() => setShowPages(false)}>
        <li>Create NFT</li>
        <li>Product</li>
        <li>Login</li>
        <li>About Us</li>
        <li>Upload Type</li>
        <li>Registration</li>
        <li>Product Details</li>
        <li>Contact</li>
      </ul>}

      {showBlog &&
      <ul className='blogList' 
          onMouseEnter={handleBlogHover} 
          onMouseLeave={() => setShowBlog(false)}>
        <li>Blog Single Column</li>
        <li>Blog Two Column</li>
        <li>Blog Three Column</li>
        <li>Blog Four Column</li>
        <li>Blog Details</li>
      </ul>}
    </>
  )
}

export default Header;