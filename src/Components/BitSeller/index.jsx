import './BitSeller.scss';
import { useEffect, useState } from 'react';

const BitSeller = ({
  sellerImage,
  sellerName,
  bit,
  hours,
  place,
}) => {
  const [tiempoPasado, setTiempoPasado] = useState('');

  useEffect(() => {
    const date = new Date(hours);
    const diferenciaDeTiempo = new Date() - date;
    const horas = Math.floor(diferenciaDeTiempo / (1000 * 60 * 60));
    const minutos = Math.floor((diferenciaDeTiempo / (1000 * 60)) % 60);

    let resultado = '';
    if (horas > 0) {
      resultado = `${horas} hours ago`;
    } else {
      resultado = `${minutos} minutes ago`;
    }

    setTiempoPasado(resultado);
  }, []);
  return (
    <div className={`bit-seller ${place && 'back'} `}>
      <div className={`sellerb__image  ${place && 'image'}`}>
        <img src={sellerImage} alt="profile" />
      </div>
      <div className="sellerb__info">
        {place === false && (
          <>
            <a href="#top">
              <h4 className="sellerb__info-title">
                <span className="bit">
                  {bit}
                  wETH  by
                  {' '}
                </span>
                {sellerName}
              </h4>
            </a>
            <p className="info-number">
              {' '}
              {tiempoPasado}
              {' '}
            </p>
          </>
        )}
        {place === true && (
          <>
            <a href="#top">
              <h4 className="info-title">
                <span className="bit">
                  Heighest bid
                  {' '}
                </span>
                {sellerName}
              </h4>
            </a>
            <p className="number">
              {' '}
              {bit}
              {' '}
              wETH
              {' '}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BitSeller;
