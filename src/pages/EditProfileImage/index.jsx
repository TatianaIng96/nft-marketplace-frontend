/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
import './EditProfileImage.scss';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';

const EditProfileImage = () => {
  return (
    <div>
      <Inner page="Edit Your Profile" />
      <div className="pageContainer">
        <section className="topSection">
          <span>Edit your profile</span>
          <button type="button" className="previewButton"> <AiOutlineEye /> Preview</button>
        </section>
        <div className="menuAndOptionsContainer">
          <div className="editMenuContainer">
            <EditProfileMenu />
          </div>
          <section className="optionsSection">
            <div className="profilePicture">
              <span>Change your profile picture</span>
              <img src="../../profile-image.png" alt="Profile Picture" />
              <button type="button" className="uploadButton">Upload</button>
            </div>
            <div className="coverPhoto">
              <span>Change your cover photo</span>
              <img src="../../nft-background.webp" alt="Cover Photo" />
              <button type="button" className="uploadButton">Upload</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImage;
