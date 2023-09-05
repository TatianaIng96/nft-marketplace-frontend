/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validators } from '../../assets/validators';
import './SignUpForm.scss';
import Inner from '../../Components/Inner';
// import useForm from '../../hooks/useForm';

const SignUpForm = () => {
  const navigate = useNavigate();
  // const { object, handleChange } = useForm({});
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserToRegister({
      ...userToRegister,
      [name]: value,
    });

    validateField(name, value);

    const arrayOfMessages = Object.values(errors);
    const setOfMessages = new Set();
    arrayOfMessages.map((message) => { return setOfMessages.add(message); });
    if (setOfMessages.size > 1) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

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
                Object.keys(errors).map((error) => {
                  return (
                    <div className="error-message">
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
              <div className="otherLogin">
                <img src="../../Google-Logo.svg.webp" alt="Google Logo" />
                <p>Log in with Google</p>
              </div>
              <div className="otherLogin">
                <img src="../../facebook-logo.png" alt="Facebook Logo" />
                <p>Log in with Facebook</p>
              </div>
              <div className="otherLogin">
                <img src="../../twitter-logo.png" alt="Twitter Logo" />
                <p>Log in with Twitter</p>
              </div>
              <div className="otherLogin">
                <img src="../../LinkedIn_logo.webp" alt="LinkedIn Logo" />
                <p>Log in with LinkedIn</p>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
