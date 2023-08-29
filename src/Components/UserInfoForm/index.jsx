/* eslint-disable arrow-body-style */
import './UserInfoForm.scss';

const UserInfoForm = ({
  onSubmit,
  onChange,
  user,
}) => {
  return (
    <div className="userInfoForm">
      <section className="formSection">
        <form onSubmit={onSubmit} action="">
          <div className="nameSection">
            <label htmlFor="first-name">
              First name
              <input
                type="text"
                name="firstName"
                id="first-name"
                value={user.firstName}
                onChange={() => onChange('firstName')}
              />
            </label>
            <label htmlFor="last-name">
              Last name
              <input
                type="text"
                name="lastName"
                id="last-name"
                value={user.lastName}
                onChange={() => onChange('lastName')}
              />
            </label>
          </div>
          <label htmlFor="email">
            Edit email
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={() => onChange('email')}
            />
          </label>
          <label htmlFor="bio">
            Edit Bio
            <textarea
              type="textarea"
              name="bio"
              id="bio"
              value={user.bio}
              onChange={() => onChange('bio')}
            />
          </label>
          <div className="movingLabels">
            <label htmlFor="role">
              Role
              <input
                type="text"
                name="role"
                id="role"
                value={user.role}
                onChange={() => onChange('role')}
              />
            </label>
            <label htmlFor="gender">
              Gender
              <select
                name="gender"
                id="gender"
                value={user.gender}
                onChange={() => onChange('gender')}
              >
                <option value="none"> </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="currency">
              Currency
              <select
                name="currency"
                id="currency"
                value={user.currency}
                onChange={() => onChange('currency')}
              >
                <option value="none"> </option>
                <option value="dollars">Dollars</option>
                <option value="pesos">Pesos</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="phone-number">
              Phone number
              <input
                type="number"
                name="phone"
                id="phone-number"
                value={user.phone}
                onChange={() => onChange('phone')}
              />
            </label>
            <label htmlFor="location">
              Location
              <select
                name="location"
                id="location"
                value={user.location}
                onChange={() => onChange('location')}
              >
                <option value="none"> </option>
                <option value="usa">USA</option>
                <option value="colombia">Colombia</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label htmlFor="address">
              Address
              <input
                type="text"
                name="address"
                id="address"
                value={user.address}
                onChange={() => onChange('address')}
              />
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
