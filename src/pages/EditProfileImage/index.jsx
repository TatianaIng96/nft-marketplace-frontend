/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
import './EditProfileImage.scss';
import { useRef, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Inner from '../../Components/Inner';
import EditProfileMenu from '../../Components/EditProfileMenu';

const EditProfileImage = () => {
  const navigate = useNavigate();

  const profileImageInputRef = useRef(null);
  const coverImageInputRef = useRef(null);

  const handleProfileImageUpload = () => {
    profileImageInputRef.current?.click();
  };
  const handleCoverImageUpload = () => {
    coverImageInputRef.current?.click();
  };

  const [profileImageFile, setProfileImageFile] = useState({});
  const [coverImageFile, setCoverImageFile] = useState({});

  const handleProfileImageFile = (event) => {
    setProfileImageFile(event.target.files);
  };
  const handleCoverImageFile = (event) => {
    setCoverImageFile(event.target.files);
  };

  const handleProfileImageSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('url', profileImageFile[0], profileImageFile[0].name);

    // const fetchConfigForm = {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //     'Content-Type': 'multipart/form-data',
    //   },
    // };

    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/profile-image/`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );

    navigate('/my-profile');
  };

  const handleCoverImageSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('url', coverImageFile[0], coverImageFile[0].name);

    const fetchConfigForm = {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/cover-image/`, fetchConfigForm);

    navigate('/my-profile');
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
              <img src="../../profile-image.png" alt="Profile Picture" onClick={handleProfileImageUpload} />
              <button type="button" onClick={handleProfileImageSubmit} className="uploadButton">Upload</button>
              <input
                type="file"
                ref={profileImageInputRef}
                name="name"
                id="profile-image-input"
                accept="image/*"
                onChange={handleProfileImageFile}
              />
            </div>
            <div className="coverPhoto">
              <span>Change your cover photo</span>
              <img src="../../nft-background.webp" alt="Cover Photo" onClick={handleCoverImageUpload} />
              <button type="button" onClick={handleCoverImageSubmit} className="uploadButton">Upload</button>
              <input
                type="file"
                ref={coverImageInputRef}
                name="file"
                id="cover-image-input"
                accept="image/*"
                onChange={handleCoverImageFile}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProfileImage;
