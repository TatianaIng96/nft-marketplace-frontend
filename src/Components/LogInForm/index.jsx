/* eslint-disable react/jsx-one-expression-per-line */
import './LogInForm.scss';
import { AiOutlineRight } from 'react-icons/ai';

function LogInForm() {
  return (
    <div className="pageContainer">
      <section className="menuSection">
        <div className="navigationMenu">
          <p>Nuron Login</p>
          <p><span>Home</span> <span><AiOutlineRight /></span> <span>Nuron Login</span></p>
        </div>
      </section>
      <div className="allLoginsContainer">
        <section className="formSection">
          <form action="">
            <h1>Login</h1>
            <label htmlFor="email-address">
              Email address
              <input type="email" id="email-address" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" />
            </label>
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              Remember me later
            </label>
            <div className="buttonsSection">
              <button type="submit" className="loginButton">Login</button>
              <button type="button" className="signUpButton">Sign Up</button>
            </div>
          </form>
        </section>
        <section className="otherLoginSection">
          <article className="otherLoginContainer">
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
  );
}

export default LogInForm;
