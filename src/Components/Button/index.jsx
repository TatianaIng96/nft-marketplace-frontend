import './Button.scss';

const Button = ({ value, className = 'button-blue', href = '#top' }) => {
  return (
    <a className={className} href={href}>
      {value}
    </a>
  );
};

export default Button;
