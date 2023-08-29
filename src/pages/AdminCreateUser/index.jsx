/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './AdminCreateUser.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inner from '../../Components/Inner';

const AdminCreateUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/create`, fetchConfig);
    const createdUser = await response.json();

    navigate(`/profile/${createdUser.id}`);
  };

  return (
    <div className="adminCreateUser">
      <Inner page="Create User" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Create User</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndForm">
          <div className="signUpFormContainer">
            <section className="formSection">
              <form onSubmit={handleSubmit} action="">
                <label htmlFor="first-name">
                  First name
                  <input
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    id="first-name"
                  />
                </label>
                <label htmlFor="last-name">
                  Last name
                  <input
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    id="last-name"
                  />
                </label>
                <label htmlFor="email">
                  Email address
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                  />
                </label>
                <label htmlFor="password">
                  Create Password
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    id="password"
                  />
                </label>
                <label htmlFor="re-password">
                  Re Password
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password-check"
                    id="re-password"
                  />
                </label>
                <div className="buttonsSection">
                  <button type="submit" className="createButton">Create</button>
                  <button type="button" className="cancelButton">Cancel</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;
