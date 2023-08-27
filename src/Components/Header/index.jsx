/* eslint-disable arrow-body-style */
import './Header.scss';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBell, FiSun } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineX } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import { useJwt } from 'react-jwt';
import logo from '../../assets/logo-neuron.png';

const Header = () => {
  const navigate = useNavigate();

  const { isExpired } = useJwt(localStorage.getItem('token'));

  const userRole = localStorage.getItem('role');

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

    navigate('/');
    window.location.reload();
  };

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const [showSideHome, setShowSideHome] = useState(false);
  const [showSideExplore, setShowSideExplore] = useState(false);
  const [showSidePages, setShowSidePages] = useState(false);

  const [showHome, setShowHome] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showPages, setShowPages] = useState(false);

  const toggleHomeList = () => {
    setShowSideHome(!showSideHome);
    setShowSideExplore(false);
    setShowSidePages(false);
  };
  const toggleExploreList = () => {
    setShowSideHome(false);
    setShowSideExplore(!showSideExplore);
    setShowSidePages(false);
  };
  const togglePagesList = () => {
    setShowSideHome(false);
    setShowSideExplore(false);
    setShowSidePages(!showSidePages);
  };

  const handleHomeHover = () => {
    setShowHome(true);
    setShowExplore(false);
    setShowPages(false);
  };
  const handleExploreHover = () => {
    setShowHome(false);
    setShowExplore(true);
    setShowPages(false);
  };
  const handlePagesHover = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(true);
  };
  const handleHideAllLists = () => {
    setShowHome(false);
    setShowExplore(false);
    setShowPages(false);
  };

  return (
    <div className="header-secction">
      <header onMouseLeave={handleHideAllLists}>
        <NavLink to="/">
          <img src={logo} alt="Nuron logo" />
        </NavLink>
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
                  <NavLink to="/">
                    <li>Home Page One</li>
                  </NavLink>
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
                <NavLink to="/explore">
                  <li>Explore Simple</li>
                </NavLink>
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
                <NavLink to="/create-nft">
                  <li>Create NFT</li>
                </NavLink>
                <li>Product</li>
                <NavLink to="/login">
                  <li>Login</li>
                </NavLink>
                <li>About Us</li>
                <li>Upload Type</li>
                <NavLink to="/sign-up">
                  <li>Registration</li>
                </NavLink>
                <NavLink to="/product-details">
                  <li>Product Details</li>
                </NavLink>
                <li>Contact</li>
              </ul>
            )}
        </div>
        <span className="menuOption">Contact</span>
        {
          !isExpired
            ? (
              <div className="menuOption changeableButtons">
                <div>
                  <button type="button" onClick={userRole === 'USER' ? () => navigate('/my-profile') : () => navigate('/ranking')}>{userRole === 'USER' ? 'Profile' : 'Dashboard'}</button>
                </div>
                <div>
                  <button type="button" onClick={handleSignOut}>Sign out</button>
                </div>
              </div>
            )
            : (
              <div className="menuOption changeableButtons">
                <div>
                  <button type="button" onClick={() => navigate('/sign-up')}>Register</button>
                </div>
                <div>
                  <button type="button" onClick={() => navigate('/login')}>Login</button>
                </div>
              </div>
            )
        }
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
                      <NavLink to="/">
                        <li
                          onClick={() => {
                            setShowSideMenu(false);
                            setShowSideHome(false);
                          }}
                          role="menuitem"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              setShowSideMenu(false);
                            }
                          }}
                          tabIndex={0}
                        >
                          Home Page One
                          {' '}
                        </li>
                      </NavLink>
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
                      <NavLink to="/explore">
                        <li
                          onClick={() => {
                            setShowSideMenu(false);
                            setShowSideExplore(false);
                          }}
                          role="menuitem"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              setShowSideMenu(false);
                            }
                          }}
                          tabIndex={0}
                        >
                          Explore Simple
                          {' '}
                        </li>
                      </NavLink>
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
                      <NavLink to="/create-nft">
                        <li
                          onClick={() => {
                            setShowSideMenu(false);
                            setShowSidePages(false);
                          }}
                          role="menuitem"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              setShowSideMenu(false);
                            }
                          }}
                          tabIndex={0}
                        >
                          Create NFT
                          {' '}
                        </li>
                      </NavLink>
                      <li>Product</li>
                      <li>About Us</li>
                      <NavLink to="/product-details">
                        <li
                          onClick={() => {
                            setShowSideMenu(false);
                            setShowSidePages(false);
                          }}
                          role="menuitem"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              setShowSideMenu(false);
                            }
                          }}
                          tabIndex={0}
                        >
                          Product details
                          {' '}
                        </li>
                      </NavLink>
                    </ul>
                  )}
                <li>Contact</li>
                {
                  !isExpired
                    ? (
                      <div>
                        <div>
                          <button
                            type="button"
                            onClick={userRole === 'USER' ? () => {
                              setShowSideMenu(false);
                              navigate('/my-profile');
                            } : () => {
                              setShowSideMenu(false);
                              navigate('/ranking');
                            }}
                          >
                            {userRole === 'USER' ? 'Profile' : 'Dashboard'}

                          </button>
                        </div>
                        <div>
                          <button type="button" onClick={handleSignOut}>Sign out</button>
                        </div>
                      </div>
                    )
                    : (
                      <div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              setShowSideMenu(false);
                              navigate('/sign-up');
                            }}
                          >
                            Register

                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              setShowSideMenu(false);
                              navigate('/login');
                            }}
                          >
                            Log in

                          </button>
                        </div>
                      </div>
                    )
                }
                {/* <NavLink to={localStorage.getItem('token') ? '/my-profile' : '/login'}>
                  <li
                    onClick={() => {
                      setShowSideMenu(false);
                      setShowSidePages(false);
                    }}
                    role="menuitem"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        setShowSideMenu(false);
                      }
                    }}
                    tabIndex={0}
                  >
                    {localStorage.getItem('token') ? 'Profile' : 'Login'}
                    {' '}
                  </li>
                </NavLink>
                {
                  localStorage.getItem('token')
                    ? <button type="button">Sign out</button>
                    : (
                      <NavLink to="/sign-up">
                        <li
                          onClick={() => {
                            setShowSideMenu(false);
                            setShowSidePages(false);
                          }}
                          role="menuitem"
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              setShowSideMenu(false);
                            }
                          }}
                          tabIndex={0}
                        >
                          Register
                          {' '}
                        </li>
                        </NavLink>
                    )
                } */}
              </ul>
            </section>
          )}
      </header>

    </div>
  );
};

export default Header;
