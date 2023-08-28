/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './AdminEditUser.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ModalDeleteUserConfirmation from '../../Components/ModalDeleteUserConfirmation';
import ModalConfirmAdminRole from '../../Components/ModalConfirmAdminRole';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';

const AdminEditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [deleteUserQuestion, setDeleteUserQuestion] = useState(false);
  const [confirmAdmin, setConfirmAdmin] = useState(false);
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
    async function fetchUser() {
      const fetchConfig = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };

      const response = await fetch(`http://localhost:8080/api/users/${id}`, fetchConfig);
      const fetchedUser = await response.json();
      setUser(fetchedUser);
    }
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

    await fetch(`http://localhost:8080/api/users/${user.id}`, fetchConfig);

    navigate(`/profile/${user.id}`);
  };

  return (
    <div className="adminEditUser">
      <Inner page="Edit User" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Edit User</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndForm">
          <div className="editMenuContainer">
            <EditProfileMenu />
            <div className="deleteUserContainer">
              <button type="button" onClick={() => { return setDeleteUserQuestion(true); }} className="deleteUserButton">Delete user</button>
            </div>
          </div>
          <div className="userInfoFormContainer">
            <UserInfoForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              user={user}
            />
          </div>
        </div>
        <div className="deleteUserContainer">
          <button type="button" className="deleteUserButton">Delete user</button>
        </div>
      </div>
      {deleteUserQuestion
        && (
          <ModalDeleteUserConfirmation
            onCancel={setDeleteUserQuestion}
            onDelete={setConfirmAdmin}
          />
        )}
      {confirmAdmin
        && <ModalConfirmAdminRole onCancel={setConfirmAdmin} />}
    </div>
  );
};

export default AdminEditUser;
