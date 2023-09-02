import './ActivateAccount.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ActivateAccount = () => {
  const { token } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:8080/auth/local/activate-account/${token}`);
      const { profile, token: userToken } = response.json();

      const {
        firstName, lastName, email, role,
      } = profile;

      localStorage.setItem('token', userToken);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h3>Your account has been activated!</h3>
      <p>You are also already logged in. Feel free to start using Nuron!</p>
    </div>
  );
};

export default ActivateAccount;
