/* eslint-disable react/jsx-one-expression-per-line */
import './EditProfileMenu.scss';
import { LuEdit } from 'react-icons/lu';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiUnlock } from 'react-icons/fi';
import { MdOutlineNotifications } from 'react-icons/md';

const EditProfileMenu = () => {
  <div className="wholeContainer">
    <div className="menuContainer">
      <div className="optionContainer">
        <LuEdit /> Edit Profile Image
      </div>
      <div className="optionContainer">
        <BsFillPersonFill /> Personal Information
      </div>
      <div className="optionContainer">
        <FiUnlock /> Change Password
      </div>
      <div className="optionContainer">
        <MdOutlineNotifications /> Notification Settings
      </div>
    </div>
  </div>;
};

export default EditProfileMenu;
