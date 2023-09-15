/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { validators } from '../../assets/validators';
import './SignUpForm.scss';
import Inner from '../../Components/Inner';

const SignUpForm = () => {
  const {
    loginWithPopup,
    isAuthenticated,
  } = useAuth0();

  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState(true);
  const [comparePassword, setComparePassword] = useState('');
  const [userToRegister, setUserToRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    const errorActions = {
      firstName: () => { return (validators.name.test(value) ? '' : 'Your first name can only contain letters'); },
      lastName: () => { return (validators.name.test(value) ? '' : 'Your lastname can only contain letters'); },
      email: () => { return (validators.email.test(value) ? '' : 'Not a valid email'); },
      password: () => { return (validators.password.test(value) ? '' : 'Password must contain at least 8 characters, a letter and a number'); },
    };

    errorMessage = errorActions[fieldName]();

    setErrors({
      ...errors,
      [fieldName]: errorMessage,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithPopup();

      const data = {
        firstName: userToRegister.firstName,
        lastName: userToRegister.lastName,
        email: userToRegister.email,
      };

      const fetchConfig = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/google/`, fetchConfig);
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
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserToRegister({
      ...userToRegister,
      [name]: value,
    });

    validateField(name, value);
  };

  useEffect(() => {
    const handleDisableButton = () => {
      const arrayOfMessages = Object.values(errors);
      const errorExists = arrayOfMessages.some((message) => { return message !== ''; });
      if (errorExists) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    };
    handleDisableButton();
  }, [handleChange]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userToRegister.password !== userToRegister['password-check']) {
      setComparePassword('*Passwords do not match');
      return;
    }
    setComparePassword('');

    const data = { ...userToRegister };
    delete data['password-check'];

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/`, fetchConfig);
    const { profile, token } = await response.json();

    const {
      firstName, lastName, email, role,
    } = profile;

    localStorage.setItem('token', token);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);

    navigate('/verify-account');
  };

  return (
    <div className="signUpAll">
      <Inner page="Sign Up" />
      <div className="pageContainer">
        <div className="allSignUpsContainer">
          <section className="formSection">
            <form onSubmit={handleSubmit} action="">
              <h1>Sign Up</h1>
              <label htmlFor="first-name">
                First name
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="firstName"
                  id="first-name"
                />
              </label>
              <label htmlFor="last-name">
                Last name
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="lastName"
                  id="last-name"
                />
              </label>
              <label htmlFor="email">
                Email address
                <input
                  type="email"
                  onChange={handleChange}
                  required
                  name="email"
                  id="email"
                />
              </label>
              <label htmlFor="password">
                Create Password
                <input
                  type="password"
                  onChange={handleChange}
                  required
                  name="password"
                  id="password"
                  autoComplete="new-password"
                />
              </label>
              <label htmlFor="re-password">
                Re Password
                <input
                  type="password"
                  onChange={handleChange}
                  required
                  name="password-check"
                  id="re-password"
                  autoComplete="new-password"
                />
              </label>
              {comparePassword && <p className="alert-password">{comparePassword}</p>}
              <label htmlFor="checkbox" className="check-terms">
                <input type="checkbox" id="checkbox" required />
                Agree to all terms and conditions
              </label>
              {
                Object.keys(errors).map((error, index) => {
                  return (
                    <div className="error-message" key={index}>
                      {errors[error]}
                    </div>
                  );
                })
              }
              {
                disableButton
                  ? (
                    <div className="buttonsSection">
                      <button type="submit" className="signUpButton__disabled" disabled>Sign Up</button>
                    </div>
                  )
                  : (
                    <div className="buttonsSection">
                      <button type="submit" className="signUpButton">Sign Up</button>
                    </div>
                  )
              }
            </form>
          </section>
          <section className="otherSignUpSection">
            <article className="otherSignUpContainer">
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

export default SignUpForm;
