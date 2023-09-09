/* eslint-disable quote-props */
import './ModalConfirmAdminRole.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ModalConfirmAdminRole = ({ onCancel }) => {
  const { id } = useParams();

  const [password, setPassword] = useState({
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
    console.log(password);
  };

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const fetchConfig = {
        method: 'DELETE',
        body: JSON.stringify(password),
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/${id}`, fetchConfig);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (message !== '') {
    return <div className="message">{message}</div>;
  }

  return (
    <div className="modalConfirmAdminRole">
      <form onSubmit={handleDelete}>
        <label htmlFor="password">
          Please verify your role as an administrator by confirming your password
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </label>
        <div className="buttonsContainer">
          <button
            type="button"
            onClick={() => { return onCancel(false); }}
            className="cancelButton"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="confirmButton"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalConfirmAdminRole;
