/* eslint-disable react/jsx-one-expression-per-line */
import './EditPersonalInformation.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { useContext } from 'react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';
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
          <section className="formSection">
            <form onSubmit={handleSubmit} action="">
              <div className="nameSection">
                <label htmlFor="first-name">
                  First name
                  <input type="text" onChange={handleChange} name="first-name" id="first-name" />
                </label>
                <label htmlFor="last-name">
                  Last name
                  <input type="text" onChange={handleChange} name="last-name" id="last-name" />
                </label>
              </div>
              <label htmlFor="email">
                Edit your email
                <input type="email" onChange={handleChange} name="email" id="email" />
              </label>
              <label htmlFor="bio">
                Edit your Bio
                <textarea type="textarea" onChange={handleChange} name="bio" id="bio" />
              </label>
              <div className="movingLabels">
                <label htmlFor="role">
                  Your role
                  <input type="text" onChange={handleChange} name="role" id="role" />
                </label>
                <label htmlFor="gender">
                  Gender
                  <select onChange={handleChange} name="gender" id="gender">
                    <option value="none"> </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="currency">
                  Currency
                  <select onChange={handleChange} name="currency" id="currency">
                    <option value="none"> </option>
                    <option value="dollars">Dollars</option>
                    <option value="pesos">Pesos</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="phone-number">
                  Phone number
                  <input type="number" onChange={handleChange} name="phone-number" id="phone-number" />
                </label>
                <label htmlFor="location">
                  Location
                  <select onChange={handleChange} name="location" id="location">
                    <option value="none"> </option>
                    <option value="usa">USA</option>
                    <option value="colombia">Colombia</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="address">
                  Address
                  <input type="text" onChange={handleChange} name="address" id="address" />
                </label>
              </div>
              <div className="buttonSection">
                <button type="button" className="cancelButton">Cancel</button>
                <button type="submit" className="saveButton">Save</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInformation;
