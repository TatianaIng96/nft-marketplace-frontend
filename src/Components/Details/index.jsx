import './Details.scss';
import { useState, useEffect } from 'react';
import { sellerData } from '../../assets/data';
import TopSeller from '../TopSeller';
import BitArea from '../BitArea';

const Details = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(sellerData);
  }, []);
  return (
    <div className="details">
      <div className="wrapper-details">
        <div className="top-seller-inner">
          <div className="top-seller-wrapper">
            <div className="thumbanail">
              {
                sellers.slice(0, 1).map((seller) => {
                  return (
                    <TopSeller
                      key={seller.id}
                      sellerImage={seller.image}
                      sellerName={seller.name}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className="property-wrapper">
          <h6 className="property-title">Property</h6>
          <div className="property-wrapper">
            <div className="column-wrapper">
              <div className="property-inner">
                <span className="color-span"> HYPE TYPE</span>
                {' '}
                <span className="color-white">CALM AF (STILL)</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> BASTARNESS</span>
                {' '}
                <span className="color-white">C00LIO BASTARD</span>
              </div>
              <div className="property-inner-short">
                <span className="color-span">TYPE</span>
                {' '}
                <span className="color-white">APE</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> ASTARDNESS</span>
                {' '}
                <span className="color-white">BASTARD</span>
              </div>
              <div className="property-inner">
                <span className="color-span">BAD HABIT(S)</span>
                {' '}
                <span className="color-white">PIPE</span>
              </div>
              <div className="property-inner-short">
                <span className="color-span"> BID</span>
                {' '}
                <span className="color-white">BPEYti</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> ASTRAGENAKAR</span>
                {' '}
                <span className="color-white">BASTARD</span>
              </div>
              <div className="property-inner-short">
                <span className="color-span"> CITY</span>
                {' '}
                <span className="color-white">TOKIO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="property-wrapper">
          <h6 className="property-title">Tags</h6>
          <div className="property-wrapper">
            <div className="column-wrapper">
              <div className="property-inner">
                <span className="color-span"> ZARY</span>
                {' '}
                <span className="color-white">APE</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> SOMALIAN</span>
                {' '}
                <span className="color-white">TRIBUTE</span>
              </div>
              <div className="property-inner">
                <span className="color-span">TUNA</span>
                {' '}
                <span className="color-white">PIPE</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> BID</span>
                {' '}
                <span className="color-white">BPEYti</span>
              </div>
              <div className="property-inner">
                <span className="color-span">ASTRAGENAKAR</span>
                {' '}
                <span className="color-white">BASTARD</span>
              </div>
              <div className="property-inner">
                <span className="color-span"> CITY</span>
                {' '}
                <span className="color-white">TOKIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
