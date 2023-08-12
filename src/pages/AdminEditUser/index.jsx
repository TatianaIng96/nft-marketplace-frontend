/* eslint-disable react/jsx-one-expression-per-line */
import './AdminEditUser.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import ModalDeleteUserConfirmation from '../../Components/ModalDeleteUserConfirmation';
import ModalConfirmAdminRole from '../../Components/ModalConfirmAdminRole';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';

const AdminEditUser = () => {
  const [deleteUserQuestion, setDeleteUserQuestion] = useState(false);
  const [confirmAdmin, setConfirmAdmin] = useState(false);

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
            <UserInfoForm />
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
