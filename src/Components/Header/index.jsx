import './Header.scss';
import { useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiBell,FiSun} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';

const Header = () => {

  const [showSearchBar,setShowSearchBar] = useState(false);

  const handleDisplaySearch = () => setShowSearchBar(!showSearchBar);

  return (
    <>
        <header>
            <img src="src/assets/logo-white.png" alt="Nuron logo" />
            <section className='buttonsContainer'>
                <div className='iconContainer' onClick={handleDisplaySearch}><AiOutlineSearch/></div>

                <div><button>Wallet connect</button></div>
                <div className='iconContainer'><FiBell/></div>
                <div className='iconContainer'><RxHamburgerMenu/></div>
                <div className='iconContainer'><FiSun/></div>
            </section>
        </header>
        {showSearchBar && 
        <div className='searchBarContainer'>
          <input type="text" placeholder='Search...' className='searchInput'/>
          <button className='searchButton'><AiOutlineSearch/></button>
        </div>}
    </>
  )
}

export default Header;
