import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn,
} from 'react-icons/fa';
import './Footer.scss';
import logo from '../../assets/logo-neuron.png';
import List from './List';

const FooterComponent = () => {
  const nuron = [
    'Protocol Explore',
    'System Token',
    'Optimize Time',
    'Visual Checking',
    'Fadeup System',
    'Activity Log',
    'System Auto Statice',
  ];

  const information = [
    'Market Explore',
    'Ready Token',
    'Otimize Time',
    'Main Option',
    'Blog Grid',
    'About Us',
    'Fix Bug',
  ];
  const recent = [
    {
      title: '#21 the Wonder',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: 'https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-01.jpg&w=64&q=75',
    },

    {
      title: 'Diamond Dog',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: 'https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-02.jpg&w=64&q=75',
    },

    {
      title: 'Morga11',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: 'https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-03.jpg&w=64&q=75',
    },
  ];
  return (
    <div className="footer-secction">
      <footer className="footer">
        <div className="footer-menu">
          <div className="container">
            <div className="col email-subscription">
              <div className="header-subscription">
                <img src={logo} alt="logo" />
                <p className="footer-describe">
                  Created with the collaboration of over 60
                  of the world&apos;s best Nuron Artists.
                </p>
              </div>
              <div className="form-subscription">
                <div className="widget-botton">
                  <h6 className="title">Get The Latest Nuron Updates</h6>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your username"
                    aria-label="Recipient's username"
                  />
                  <button className="btn-subscribe" type="button">
                    Subscribe
                  </button>
                </div>
                <p>Email is safe. We don&apos;t spam.</p>
              </div>
            </div>

            <div className="col nuron-info">
              <List list={nuron} title="Nuron" />
            </div>
            <div className="col general-info">
              <List list={information} title="Information" />
            </div>
            <div className="col recent-sold-out">
              <h6 className="widget-title-2">Recent Sold Out</h6>
              <ul className="footer-recent">
                {recent.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li className="recent" key={index}>
                    <div className="image-thumb">
                      <a href="preload">
                        <img
                          src={item.image}
                          className="img-radius"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title-2">
                        <a href="#top">{item.title}</a>
                      </h6>
                      <p className="p">{item.body}</p>
                      <span className="price">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="align-items-center">
            <ul className="privacy">
              <li>
                <span className="aling">©2022 Nuron, Inc. All rights reserved</span>
              </li>
              <li className=" aling-term">
                <a href="#top"> Terms</a>
                <a href="$top" className="aling-policy"> Privacy Policy </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="social">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <i className="facebook">
                    <FaFacebookF />
                  </i>
                </a>
              </li>
              <li className="left">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="instagram">
                    <FaInstagram />
                  </i>
                </a>
              </li>
              <li className="left">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twiter"
                >
                  <i className="twiter">
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li className="left">
                <a
                  href="https://linkending.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkending"
                >
                  <i className="linkending">
                    <FaLinkedinIn />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <div className="rn-progress-parent" role="button" tabIndex="-1">
      <svg className="rn-back-circle svg-inner" width="5%" height="10%"
       viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
       style={{transition: 'stroke-dashoffset 10ms linear 0s',
       stroke: '307.919, 307.919'}}/></svg></div> */}
    </div>
  );
};

export default FooterComponent;
