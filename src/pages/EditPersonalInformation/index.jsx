/* eslint-disable react/jsx-one-expression-per-line */
import './EditPersonalInformation.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { useContext } from 'react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
import UserInfoForm from '../../Components/UserInfoForm';
import useForm from '../../hooks/useForm';

const EditPersonalInformation = () => {
  const { users, setUsers } = useContext(UsersAndNFTsContext);

  const { object, handleChange } = useForm({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, object]);
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
              onEdit={handleChange}
              onSubmit={handleSubmit}
            /* firstNameValue=""
            lastNameValue=""
            emailValue=""
            bioValue=""
            roleValue=""
            genderValue="none"
            currencyValue="none"
            phoneNumberValue=""
            locationValue="none"
            addressValue="" */
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInformation;
