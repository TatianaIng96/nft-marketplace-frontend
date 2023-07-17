import {FaFacebookF} from "react-icons/fa";
import './Footer.scss';
import logo from '../../assets/logo-neuron.png'
import List from "./list";

const FooterComponent = () => {
  const neuron = [
    'Protocol Explore',
    'System Token',
    'Optimize Time',
    'Visual Checking',
    'Fadeup System',
    'Activity Log',
    'System Auto Statice'
  ]

  const information = [
   'Market Explore',
    'Ready Token',
    'Otimize Time',
    'Main Option',
    'Blog Grid',
    'About Us',
    'Fix Bug'
  ]
  const recent = [
    {
      title: '#21 the Wonder',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: "https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-01.jpg&w=64&q=75"
    },

    {
      title: 'Diamond Dog',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: "https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-02.jpg&w=64&q=75"
    },

    {
      title: 'Morga11',
      body: 'Highest bid 1/20',
      price: '0.244wETH',
      image: "	https://nuron-nextjs.vercel.app/_next/image?url=%2Fimages%2Fportfolio%2Fportfolio-03.jpg&w=64&q=75"
    },
  ]
  return (
    <>
      <footer className="footer ">
        <div className="footer-one">
          <div className="container">
           <div className="row">
              <div className="div-1">
                <div className="column-1 column-2">
                  <div className="logo">
                    <img src={logo}/>
                  </div>
                  <p className="footer-describe">
                    Created with the collaboration of over 60 
                    of the world's best Nuron Artists.
                  </p>
                </div>
                <div className="widget-botton">
                  <h6 className="title"> Get The Latest Nuron Updates</h6>
                </div>
                <div className="input-subscribe">
                  <input type="text" className="form-control" 
                  placeholder="Your username" aria-label="Recipient's username"/>
                  <div className="form-control-append">
                    <button className="btn-subscribe">
                      Subscribe
                    </button>
                  </div>
                  <div>
                    <p>Email is safe. We don't spam.</p>
                  </div>
                </div>
              </div>
              <div className="div">
                <div className="column-1">
                  <List list={neuron} title={'Neuron'}/>
                </div>
              </div>

              <div className="div-2">
                <div className="column-1">
                  <List list={information} title={'Information'}/>
                </div>
              </div>

              <div className="div-3">
                <div className="column-1">
                  <div className="footer-neuron">
                    <h6 className="widget-title-2">Recent Sold Out</h6>
                    <ul className="footer-recent">
                      {recent.map((item,index)=>(
                        <li className="recent" key={index}>
                          <div className="image-thumb">
                            <a href="preload">
                              <img src={item.image}
                              className="img-radius"/>
                            </a>
                          </div>
                          <div className="content">
                            <h6 className="title-2">
                              <a href="">{item.title}</a>
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
           </div>
          </div>
        </div>
        
        <div className="copy-right">
          <div className="container">
            <div className=" row align-items-center ">
              <div className="column-3">
                <div className="copyright-left">
                  <ul className="privacy">
                    <li>
                     <span className="left">©2022 Nuron, Inc. All rights reserved</span>
                    </li>
                    <li className="">
                       <a rel="preload" href="left"> Terms</a>
                    </li>
                    <li className="left"> 
                      <a rel="preload" href=""> Privacy Policy </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column-3">
            <div className="copyright-right">
              <ul className="social">
                <li>
                <a href="https://facebook.com" target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook">
                  <i className="facebook"> 
                  {<FaFacebookF/>}
                  </i></a>
                </li>
                <li>
                <a href="https://facebook.com" target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook">
                  <i className="facebook"> 
                  {<FaFacebookF/>}
                  </i></a>
                </li>
                <li>
                <a href="https://facebook.com" target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook">
                  <i className="facebook"> 
                  {<FaFacebookF/>}
                  </i></a>
                </li>
                <li>
                <a href="https://facebook.com" target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook">
                  <i className="facebook"> 
                  {<FaFacebookF/>}
                  </i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="rn-progress-parent rn-backto-top-active" role="button" tabIndex="-1"><svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', stroke: '307.919, 307.919'}}/></svg></div>
    </>
  )
}

export default FooterComponent;