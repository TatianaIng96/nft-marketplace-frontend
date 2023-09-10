import './ModalDeleteUserConfirmation.scss';
/* eslint-disable quote-props */
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ModalDeleteUserConfirmation = ({ onCancel }) => {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const fetchConfig = {
        method: 'DELETE',
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
    <div className="modalDeleteUserConfirmation">
      <div className="mainContainer">
        <div className="questionContainer">
          Are you sure you want to delete this user?
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => { return onCancel(false); }} className="cancelButton">Cancel</button>
          <button type="button" onClick={handleDelete} className="deleteButton">Yes, delete</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteUserConfirmation;
