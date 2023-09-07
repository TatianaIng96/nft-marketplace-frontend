import './RecoverPassword.scss';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecoverPassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   return;
    // }

    // const objectToSend = { password };

    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(password),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/new-password/${id}`, fetchConfig);

    navigate('/password-updated');
  };

  return (
    <div className="modalRecoverPassword">
      <form onSubmit={handleSubmit}>
        <h2>Password recovery</h2>
        <label htmlFor="password">
          New Password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirm-password">
          Confirm New Password
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={setConfirmPassword}
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

export default RecoverPassword;
