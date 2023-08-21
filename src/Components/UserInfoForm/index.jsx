import './UserInfoForm.scss';
/* import { useContext } from 'react';
import { UsersAndNFTsContext } from '../../store/UsersAndNFTsContext';
import useForm from '../../hooks/useForm'; */

const UserInfoForm = ({ onChange, onSubmit, objectToEdit }) => {
  /* const { users, setUsers } = useContext(UsersAndNFTsContext);

  const { object, handleChange } = useForm({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, object]);
  }; */

  return (
    <div className="userInfoForm">
      <section className="formSection">
        <form onSubmit={onSubmit} action="">
          <div className="nameSection">
            <label htmlFor="first-name">
              First name
              <input type="text" onChange={onChange} name="firstName" value={objectToEdit.firstName} id="first-name" /* value={firstNameValue} */ />
            </label>
            <label htmlFor="last-name">
              Last name
              <input type="text" onChange={onChange} name="lastName" value={objectToEdit.lastName} id="last-name" /* value={lastNameValue} */ />
            </label>
          </div>
          <label htmlFor="email">
            Edit email
            <input type="email" onChange={onChange} name="email" value={objectToEdit.email} id="email" /* value={emailValue} */ />
          </label>
          <label htmlFor="bio">
            Edit Bio
            <textarea type="textarea" onChange={onChange} name="bio" value={objectToEdit.bio} id="bio" /* value={bioValue} */ />
          </label>
          <div className="movingLabels">
            <label htmlFor="role">
              Role
              <input type="text" onChange={onChange} name="role" value={objectToEdit.role} id="role" /* value={roleValue} */ />
            </label>
            <label htmlFor="gender">
              Gender
              <select onChange={onChange} name="gender" value={objectToEdit.gender} id="gender"/* value={genderValue} */>
                <option value="none"> </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="currency">
              Currency
              <select onChange={onChange} name="currency" value={objectToEdit.currency} id="currency"/* value={currencyValue} */>
                <option value="none"> </option>
                <option value="dollars">Dollars</option>
                <option value="pesos">Pesos</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="phone-number">
              Phone number
              <input type="number" onChange={onChange} name="phone" value={objectToEdit.phone} id="phone-number" /* value={phoneNumberValue} */ />
            </label>
            <label htmlFor="location">
              Location
              <select onChange={onChange} name="location" value={objectToEdit.location} id="location"/* value={locationValue} */>
                <option value="none"> </option>
                <option value="usa">USA</option>
                <option value="colombia">Colombia</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="address">
              Address
              <input type="text" onChange={onChange} name="address" value={objectToEdit.address} id="address" /* value={addressValue} */ />
            </label>
          </div>
          <div className="buttonSection">
            <button type="button" className="cancelButton">Cancel</button>
            <button type="submit" className="saveButton">Save</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserInfoForm;
