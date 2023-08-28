/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
import './EditProfileImage.scss';
import { useRef, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';

const EditProfileImage = () => {
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const [file, setFile] = useState({});

  const handleFiles = (event) => {
    setFile(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('url', file[0], file[0].name);

    const fetchConfigForm = {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch('http://localhost:8080/api/cover-image/', fetchConfigForm);
  };

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
              <img src="../../nft-background.webp" alt="Cover Photo" onClick={handleUpload} />
              <button type="button" onClick={handleSubmit} className="uploadButton">Upload</button>
              <input
                type="file"
                ref={inputRef}
                name="file"
                id="file"
                accept="image/*"
                onChange={handleFiles}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImage;
