/* eslint-disable react/jsx-one-expression-per-line */
import './EditPersonalInformation.scss';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';

const EditPersonalInformation = () => {
  return (
    <div>
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
            <form action="">
              <div className="nameSection">
                <label htmlFor="first-name">
                  First name
                  <input type="text" id="first-name" />
                </label>
                <label htmlFor="last-name">
                  Last name
                  <input type="text" id="last-name" />
                </label>
              </div>
              <label htmlFor="email">
                Edit your email
                <input type="email" id="email" />
              </label>
              <label htmlFor="bio">
                Edit your Bio
                <textarea type="textarea" id="bio" />
              </label>
              <div className="movingLabels">
                <label htmlFor="role">
                  Your role
                  <input type="text" id="role" />
                </label>
                <label htmlFor="gender">
                  Gender
                  <select name="select-gender" id="gender">
                    <option value="none"> </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="currency">
                  Currency
                  <select name="select-currency" id="currency">
                    <option value="none"> </option>
                    <option value="dollars">Dollars</option>
                    <option value="pesos">Pesos</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="phone-number">
                  Phone number
                  <input type="number" id="phone-number" />
                </label>
                <label htmlFor="location">
                  Location
                  <select name="select-location" id="location">
                    <option value="none"> </option>
                    <option value="usa">USA</option>
                    <option value="colombia">Colombia</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label htmlFor="address">
                  Address
                  <input type="text" id="address" />
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
