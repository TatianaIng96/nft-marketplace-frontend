import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';

const PrivateRoute = ({ children }) => {
  const { isAdmin } = useContext(UsersAndNFTsContext);
  return isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
