/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './ChangePassword.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messageExists, setMessageExists] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessageExists(true);
      setMessage('New password and confirm do not match');
      return;
    }

    const updatePassword = {
      oldPassword,
      newPassword,
    };

    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(updatePassword),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/change-password`, fetchConfig);

    if (response.ok) {
      setMessageExists(true);
      setMessage('Password succesfuly changed');
      navigate('/my-profile');
    } else {
      const data = response.json();
      setMessageExists(true);
      setMessage(`Error to change password: ${data.error}`);
    }
  };

  return (
    <div className="changePassword">
      <Inner page="Edit Your Profile" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Edit your profile</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndForm">
          <div className="editMenuContainer">
            <EditProfileMenu />
          </div>
          <section className="formSection">
            <form onSubmit={handleSubmit} action="">
              <div className="textContainer">
                <h2>Change your password</h2>
                <p>
                  Passwords are a critical part of information and network security. They serve
                  to protect our user accounts, but a poorly chosen password, if compromised,
                  could put the entire network at risk.
                </p>
              </div>
              <label htmlFor="email">
                Enter email
                <input type="email" required name="email" id="email" />
              </label>
              <div className="changingInputs">
                <label htmlFor="old-password">
                  Enter old password
                  <input type="password" onChange={(e) => { return setOldPassword(e.target.value); }} required name="oldPassword" id="old-password" autoComplete="old-password" />
                </label>
                <label htmlFor="new-password">
                  Create new password
                  <input type="password" onChange={(e) => { return setNewPassword(e.target.value); }} required name="newPassword" id="new-password" autoComplete="new-password" />
                </label>
              </div>
              <label htmlFor="confirm-password">
                Confirm password
                <input type="password" onChange={(e) => { return setConfirmPassword(e.target.value); }} required name="confirm-password" id="confirm-password" autoComplete="confirm-password" />
              </label>
              <div className="buttonContainer">
                <button type="submit" className="saveButton">Save</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      {messageExists && (
        <div className="message">
          {message}
          <button type="button" onClick={() => { return setMessageExists(false); }}>Ok</button>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
