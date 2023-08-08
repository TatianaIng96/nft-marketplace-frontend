import './ListNftAdmin.scss';
import Profile from '../Profile';

const ListNftAdmin = () => {
  const admin = true;
  return (
    <div className="list-admin">
      <Profile admin={admin} />
    </div>
  );
};

export default ListNftAdmin;
