import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const role = localStorage.getItem('role');

  let isAdmin = false;
  if (role === 'ADMIN') {
    isAdmin = true;
  }

  return isAdmin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
