import './EditPersonalInformation.scss';
import EditProfileMenu from '../../Components/EditProfileMenu';

const EditPersonalInformation = () => {
  <div>
    <div>
      <EditProfileMenu />
    </div>
    <div>
      <form action="">
        <label htmlFor="first-name">
          First name
          <input type="text" id="first-name" />
        </label>
      </form>
    </div>
  </div>;
};

export default EditPersonalInformation;
