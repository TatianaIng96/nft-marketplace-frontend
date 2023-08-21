/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './EditPersonalInformation.scss';
import { useEffect, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';
import useForm from '../../hooks/useForm';

const EditPersonalInformation = () => {
  const [userToEdit, setUserToEdit] = useState({});

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      const configFetch = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };
      const response = await fetch('http://localhost:8080/api/users/single', configFetch);
      const user = await response.json();
      console.log(user);
      setUserToEdit(user);
    };
    fetchUser();
  }, []);

  const { object, handleChange } = useForm(userToEdit);

  const handleSubmit = async (event) => {
    event.preventDefault();

    localStorage.setItem('firstName', object.firstName);
    localStorage.setItem('lastName', object.lastName);
    localStorage.setItem('email', object.email);
    localStorage.setItem('role', object.firstName);

    const configFetch = {
      method: 'PUT',
      body: object,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };

    await fetch('http://localhost:8080/users/', configFetch);
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
              objectToEdit={object}
              firstName={object.firstName}
              lastName={object.lastName}
              email={object.email}
              bio={object.bio}
              role={object.role}
              gender={object.gender}
              currency={object.currency}
              phone={object.phone}
              location={object.location}
              address={object.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInformation;
