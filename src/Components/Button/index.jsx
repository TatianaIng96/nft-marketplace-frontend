import './Button.scss';

const Button = ({ value, className = 'button-blue', href = '#top' }) => (
  <a className={className} href={href}>
    {value}
  </a>
);

export default Button;
