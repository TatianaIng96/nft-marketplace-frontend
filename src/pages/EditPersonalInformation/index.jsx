/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './EditPersonalInformation.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';

const EditPersonalInformation = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    role: '',
    gender: '',
    currency: '',
    phone: '',
    location: '',
    address: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const fetchConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const response = await fetch('http://localhost:8080/api/users/single', fetchConfig);
      const loggedUser = await response.json();
      setUser(loggedUser);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userToSend = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      bio: user.bio,
      role: user.role,
      gender: user.gender,
      currency: user.currency,
      phone: user.phone,
      location: user.location,
      address: user.address,
    };

    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(userToSend),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch('http://localhost:8080/api/users/single', fetchConfig);

    navigate('/my-profile');
  };

  return (
    <div className="editPersonalInformation">
      <Inner page="Edit Profile" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Edit your profile</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndForm">
          <div className="editMenuContainer">
            <EditProfileMenu />
          </div>
          <div className="userInfoFormContainer">
            <UserInfoForm
              onChange={handleChange}
              onSubmit={handleSubmit}
              user={user}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInformation;
