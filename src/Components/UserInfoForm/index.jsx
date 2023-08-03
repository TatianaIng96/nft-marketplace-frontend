import './UserInfoForm.scss';

const UserInfoForm = (props) => {
  const {
    onEdit,
    onSubmit,
    /* firstNameValue,
    lastNameValue,
    emailValue,
    bioValue,
    roleValue,
    genderValue,
    currencyValue,
    phoneNumberValue,
    locationValue,
    addressValue, */
  } = props;

  return (
    <div className="userInfoForm">
      <section className="formSection">
        <form onSubmit={onSubmit} action="">
          <div className="nameSection">
            <label htmlFor="first-name">
              First name
              <input type="text" onChange={onEdit} name="first-name" id="first-name" /* value={firstNameValue} *//>
            </label>
            <label htmlFor="last-name">
              Last name
              <input type="text" onChange={onEdit} name="last-name" id="last-name" /* value={lastNameValue} *//>
            </label>
          </div>
          <label htmlFor="email">
            Edit email
            <input type="email" onChange={onEdit} name="email" id="email" /* value={emailValue} *//>
          </label>
          <label htmlFor="bio">
            Edit Bio
            <textarea type="textarea" onChange={onEdit} name="bio" id="bio" /* value={bioValue} *//>
          </label>
          <div className="movingLabels">
            <label htmlFor="role">
              Role
              <input type="text" onChange={onEdit} name="role" id="role" /* value={roleValue} *//>
            </label>
            <label htmlFor="gender">
              Gender
              <select onChange={onEdit} name="gender" id="gender"/* value={genderValue} */>
                <option value="none"> </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="currency">
              Currency
              <select onChange={onEdit} name="currency" id="currency"/* value={currencyValue} */>
                <option value="none"> </option>
                <option value="dollars">Dollars</option>
                <option value="pesos">Pesos</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="phone-number">
              Phone number
              <input type="number" onChange={onEdit} name="phone-number" id="phone-number" /* value={phoneNumberValue} *//>
            </label>
            <label htmlFor="location">
              Location
              <select onChange={onEdit} name="location" id="location"/* value={locationValue} */>
                <option value="none"> </option>
                <option value="usa">USA</option>
                <option value="colombia">Colombia</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="address">
              Address
              <input type="text" onChange={onEdit} name="address" id="address" /* value={addressValue} *//>
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
