/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import './LogInForm.scss';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import Inner from '../../Components/Inner';
import useForm from '../../hooks/useForm';

const LogInForm = () => {
  const { setLoggedUser } = useContext(UsersAndNFTsContext);
  const {
    loginWithPopup,
    isAuthenticated,
    user,
  } = useAuth0();

  const { object, handleChange } = useForm({});

  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [messageExists, setMessageExists] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(object),
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/local/login`, fetchConfig);
    const data = await response.json();

    if (data.message) {
      setMessageExists(true);
      setMessage(data.message);
    }

    if (!data.message) {
      const { profile, token } = data;

      const {
        firstName, lastName, email, role,
      } = profile;

      localStorage.setItem('token', token);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      setLoggedUser({
        firstName, lastName, email, role, token,
      });

      if (role === 'USER') {
        navigate('/my-profile');
      } else {
        navigate('/ranking');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const options = {
        authorizationParams: { connection: 'google-oauth2' },
      };

      await loginWithPopup(options);

      const data = {
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
      };

      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/google/login`, fetchConfig);
      const { token, profile } = await response.json();

      const {
        firstName, lastName, email, role,
      } = profile;

      localStorage.setItem('token', token);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);

      if (isAuthenticated) {
        navigate('/my-profile');
      }
    } catch (error) {
      setMessageExists(true);
      setMessage(error.message);
    }
  };

  if (messageExists) {
    return (
      <div className="message">
        {message}
        <button type="button" onClick={() => { return setMessageExists(false); }}>Ok</button>
      </div>
    );
  }

  return (
    <div className="logInFormContainer">
      <Inner page="Login" />
      <div className="pageContainer">
        <div className="allLoginsContainer">
          <section className="formSection">
            <form onSubmit={handleSubmit} action="">
              <h1>Login</h1>
              <label htmlFor="email">
                Email address
                <input type="email" onChange={handleChange} name="email" id="email" />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" onChange={handleChange} name="password" id="password" />
              </label>
              <Link to="/email-form"><p>Forgot your password?</p></Link>
              <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                Remember me later
              </label>
              <div className="buttonsSection">
                <button type="submit" className="loginButton">Login</button>
              </div>
            </form>
          </section>
          <section className="otherLoginSection">
            <article className="otherLoginContainer">
              <h1>Another way to log in</h1>
              <p>Use your other accounts to log in</p>
              <button
                type="button"
                className="otherLogin"
                onClick={handleGoogleLogin}
              >
                <img src="../../Google-Logo.svg.webp" alt="Google Logo" />
                <p>Log in with Google</p>
              </button>
              <button type="button" className="otherLogin">
                <img src="../../facebook-logo.png" alt="Facebook Logo" />
                <p>Log in with Facebook</p>
              </button>
              <button type="button" className="otherLogin">
                <img src="../../twitter-logo.png" alt="Twitter Logo" />
                <p>Log in with Twitter</p>
              </button>
              <button type="button" className="otherLogin">
                <img src="../../LinkedIn_logo.webp" alt="LinkedIn Logo" />
                <p>Log in with LinkedIn</p>
              </button>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
