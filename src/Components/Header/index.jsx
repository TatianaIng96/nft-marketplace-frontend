import './Header.scss';
import {AiOutlineSearch} from 'react-icons/ai';
import {FiBell,FiSun} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';

const Header = () => {

  return (
    <>
        <header>
            <img src="src/assets/logo-white.png" alt="Nuron logo" />
            <section className='buttonsContainer'>
                <div className='iconContainer'><AiOutlineSearch/></div>
                <div><button>Wallet connect</button></div>
                <div className='iconContainer'><FiBell/></div>
                <div className='iconContainer'><RxHamburgerMenu/></div>
                <div className='iconContainer'><FiSun/></div>
            </section>
        </header>
    </>
  )
}

export default Header;
