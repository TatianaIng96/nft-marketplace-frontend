/* eslint-disable react/jsx-one-expression-per-line */
import './AdminCreateUser.scss';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';

const AdminCreateUser = () => {
  return (
    <div className="adminCreateUser">
      <Inner page="Create User" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Create User</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndForm">
          <div className="editMenuContainer">
            <EditProfileMenu />
          </div>
          <div className="userInfoFormContainer">
            <UserInfoForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateUser;
