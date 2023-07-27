/* eslint-disable react/jsx-one-expression-per-line */
import Inner from '../../Components/Inner';
import './LogInForm.scss';
import useForm from '../../hooks/useForm';

const LogInForm = () => {
  const { object, handleChange } = useForm({});

  // object es el objeto formado para pasarle al handleSubmit cuando lo tengamos

  return (
    <div className="logInFormContainer">
      <Inner page="Login" />
      <div className="pageContainer">
        <div className="allLoginsContainer">
          <section className="formSection">
            <form action="">
              <h1>Login</h1>
              <label htmlFor="email">
                Email address
                <input type="email" onChange={handleChange} name="email" id="email" />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" onChange={handleChange} name="password" id="password" />
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
    </div>
  );
};

export default LogInForm;
