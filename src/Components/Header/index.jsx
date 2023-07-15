import './Header.scss';
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiBell, FiSun} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';
import {HiOutlineX} from 'react-icons/hi';

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
      <header>
        <img src="src/assets/logo-white.png" alt="Nuron logo" />
        <section className='buttonsContainer'>
            <div className='iconContainer' onClick={handleDisplaySearch}><AiOutlineSearch/></div>
            <div><button>Wallet connect</button></div>
            <div className='iconContainer'><FiBell/></div>
            <div className='iconContainer' onClick={handleHeaderAndMenu}><RxHamburgerMenu/></div>
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
