/* eslint-disable react/jsx-one-expression-per-line */
import './EditProfileMenu.scss';
import { Link } from 'react-router-dom';
import { LuEdit } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiUnlock } from 'react-icons/fi';
import { MdOutlineNotifications } from 'react-icons/md';

const EditProfileMenu = () => {
  return (
    <div className="wholeContainer">
      <div className="menuContainer">
        <Link to="/edit-profile-image">
          <div className="optionContainer">
            <LuEdit /> Edit Profile Image
          </div>
        </Link>
        <Link to="/edit-personal-info">
          <div className="optionContainer">
            <BsFillPersonFill /> Personal Information
          </div>
        </Link>
        <Link to="/change-password">
          <div className="optionContainer">
            <FiUnlock /> Change Password
          </div>
        </Link>
        <div className="optionContainer">
          <MdOutlineNotifications /> Notification Settings
        </div>
      </div>
    </div>
  );
};

export default EditProfileMenu;
