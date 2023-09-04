/* eslint-disable react/jsx-one-expression-per-line */
import './SignUpForm.scss';
import { useNavigate } from 'react-router-dom';
import Inner from '../../Components/Inner';
import useForm from '../../hooks/useForm';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { object, handleChange } = useForm({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(object),
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
                <input type="text" onChange={handleChange} name="firstName" id="first-name" />
              </label>
              <label htmlFor="last-name">
                Last name
                <input type="text" onChange={handleChange} name="lastName" id="last-name" />
              </label>
              <label htmlFor="email">
                Email address
                <input type="email" onChange={handleChange} name="email" id="email" />
              </label>
              <label htmlFor="password">
                Create Password
                <input type="password" onChange={handleChange} name="password" id="password" />
              </label>
              <label htmlFor="re-password">
                Re Password
                <input type="password" onChange={handleChange} name="password-check" id="re-password" />
              </label>
              <label htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                Agree to all terms and conditions
              </label>
              <div className="buttonsSection">
                <button type="submit" className="signUpButton">Sign Up</button>
              </div>
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
