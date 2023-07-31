import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({ value, className = 'button-blue', to = '#top' }) => {
  return (
    <Link className={className} to={to}>
      {value}
    </Link>
  );
};

export default Button;
