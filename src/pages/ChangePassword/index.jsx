/* eslint-disable react/jsx-one-expression-per-line */
import './ChangePassword.scss';
import { useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import useForm from '../../hooks/useForm';

const ChangePassword = () => {
  const { fakeData, setFakeData } = useContext(UsersAndNFTsContext);

  const { object, handleChange } = useForm({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setFakeData([...fakeData, object]);
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
                <input type="email" onChange={handleChange} name="email" id="email" />
              </label>
              <div className="changingInputs">
                <label htmlFor="old-password">
                  Enter old password
                  <input type="password" onChange={handleChange} name="old-password" id="old-password" />
                </label>
                <label htmlFor="new-password">
                  Create new password
                  <input type="password" onChange={handleChange} name="new-password" id="new-password" />
                </label>
              </div>
              <label htmlFor="confirm-password">
                Confirm password
                <input type="password" onChange={handleChange} name="confirm-password" id="confirm-password" />
              </label>
              <div className="buttonContainer">
                <button type="submit" className="saveButton">Save</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
