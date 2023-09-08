import './EmailToRecoverPassword.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailToRecoverPassword = () => {
  const navigate = useNavigate();

  const [emailToSend, setEmailToSend] = useState({
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmailToSend({
      ...emailToSend,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(emailToSend),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/recover-password`, fetchConfig);

    navigate('/email-sent');
  };

  return (
    <div className="emailToRecoverPassword">
      <form onSubmit={handleSubmit}>
        <h4>
          Type your registered email. We will send everything necessary to recover your
          account
        </h4>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </label>
        <div className="buttonsContainer">
          <button type="button" className="cancelButton">Cancel</button>
          <button type="submit" className="confirmButton">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default EmailToRecoverPassword;
