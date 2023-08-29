import '../../pages/Profile/Profile.scss';

const AuthorInner = ({ image }) => {
  return (
    <img
      alt="MRS SUNAYRA AHSAN"
      src={image}
      width="140"
      height="140"
      className="img-profile"
    />
  );
};
export default AuthorInner;
