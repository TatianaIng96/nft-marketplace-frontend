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

  const handleDisplaySearch = () => setShowSearchBar(!showSearchBar);
  const handleHeaderAndMenu = () => {
    setShowHeaderOverMenu(!showHeaderOverMenu);
    setShowMenuOverHeader(!showMenuOverHeader);
  }

  return (
    <>
      {showHeaderOverMenu && 
      <div>
      <header>
        <img src="src/assets/logo-white.png" alt="Nuron logo" />
        <span className='menuInHeader home'>Home <BiChevronDown/></span>
        <span className='menuInHeader'>About</span>
        <span className='menuInHeader'>Explore <BiChevronDown/></span>
        <span className='menuInHeader'>Pages <BiChevronDown/></span>
        <span className='menuInHeader'>Blog <BiChevronDown/></span>
        <span className='menuInHeader'>Contact</span>
        <section className='buttonsContainer'>
            <div className='iconContainer' id='searchShower'onClick={handleDisplaySearch}><AiOutlineSearch/></div>
            <div className='searchInHeaderContainer'>
              <input type="text" placeholder='Search...' className='searchInHeader'/>
              <button className='searchButtonInHeader'><AiOutlineSearch/></button>
            </div>
            <div><button>Wallet connect</button></div>
            <div className='iconContainer'><FiBell/></div>
            <div className='iconContainer' id='hamburgerIcon' onClick={handleHeaderAndMenu}><RxHamburgerMenu/></div>
            <div className='iconContainer'><FiSun/></div>
        </section>
      </header>

      <ul className='homePagesList' id='homePagesList'>
        <li>Home Page One</li>
        <li>Home Page Two</li>
        <li>Home Page Three</li>
        <li>Home Page Four</li>
        <li>Home Page Five</li>
      </ul>
      </div>}

      {showSearchBar && 
      <div className='searchBarContainer'>
        <input type="text" placeholder='Search...' className='searchInput'/>
        <button className='searchButton'><AiOutlineSearch/></button>
      </div>}

      {showMenuOverHeader && 
      <div className='hamburgerMenu'>
        <div>
          <img src="src/assets/logo-white.png" alt="Nuron logo" className='menuImg'/>
          <button className='xButton' onClick={handleHeaderAndMenu}><HiOutlineX/></button>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>}
    </>
  )
}

export default Header;
