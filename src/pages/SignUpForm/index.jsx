/* eslint-disable react/jsx-one-expression-per-line */
import './SignUpForm.scss';
import { useContext } from 'react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import Inner from '../../Components/Inner';
import useForm from '../../hooks/useForm';

const SignUpForm = () => {
  const { users, setUsers } = useContext(UsersAndNFTsContext);

  const { object, handleChange } = useForm({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, object]);
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
                <input type="text" onChange={handleChange} name="first-name" id="first-name" />
              </label>
              <label htmlFor="last-name">
                Last name
                <input type="text" onChange={handleChange} name="last-name" id="last-name" />
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
                <button type="button" className="logInButton">Login</button>
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
