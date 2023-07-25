/* eslint-disable react/jsx-one-expression-per-line */
import './SignUpForm.scss';
import { AiOutlineRight } from 'react-icons/ai';

const SignUpForm = () => {
  return (
    <div className="signUpAll">
      <div className="pageContainer">
        <section className="menuSection">
          <div className="navigationMenu">
            <p>Sign Up</p>
            <p><span>Home</span> <span><AiOutlineRight /></span> <span>Sign Up</span></p>
          </div>
        </section>
        <div className="allSignUpsContainer">
          <section className="formSection">
            <form action="">
              <h1>Sign Up</h1>
              <label htmlFor="first-name">
                First name
                <input type="text" id="first-name" />
              </label>
              <label htmlFor="last-name">
                Last name
                <input type="text" id="last-name" />
              </label>
              <label htmlFor="email-address">
                Email address
                <input type="email" id="email-address" />
              </label>
              <label htmlFor="password">
                Create Password
                <input type="password" id="password" />
              </label>
              <label htmlFor="re-password">
                Re Password
                <input type="password" id="re-password" />
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
