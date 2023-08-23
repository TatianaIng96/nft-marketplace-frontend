/* eslint-disable quote-props */
/* eslint-disable react/jsx-one-expression-per-line */
import './CreateNFTForm.scss';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';
import Inner from '../../Components/Inner';
import useForm from '../../hooks/useForm';

const CreateNFTForm = () => {
  const [files, setFiles] = useState({});

  const { object, handleChange } = useForm({});

  const handleFiles = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    for (let i = 0; i < 3; i += 1) {
      data.append(`url_${i + 1}`, files[i], files[i].name);
    }

    const fetchConfigImages = {
      method: 'POST',
      body: data,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch('http://localhost:8080/api/nft-image/', fetchConfigImages);

    const fetchConfigForm = {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    };

    await fetch('http://localhost:8080/api/nft/', fetchConfigForm);
  };

  return (
    <div className="createNFTFormSection">
      <Inner page="Create NFT" />
      <div className="pageContainer">
        <div className="imgAndFormContainer">
          <div className="allImageContainer">
            <section className="imageInstructionsSection">
              <p>Upload File</p>
              <p>Drag or choose your file to upload</p>
            </section>
            <section className="imageSection">
              <p><FiUpload /></p>
              <p>Choose a file</p>
              <p>PNG, GIF, WEBBP, MP4 or MP3.</p>
              <p>Max 1GB.</p>
            </section>
            <input
              type="file"
              name="file"
              id="file"
              multiple
              accept="image/*"
              onChange={handleFiles}
            />
            <section className="noteSectionDesktop">
              <p>Note:</p>
              <p>Service fee: <strong>2.5%</strong></p>
              <p>You will receive: <strong>25.00 ETH $50,000</strong></p>
            </section>
          </div>
          <form className="form" onSubmit={handleSubmit} action="">
            <div className="digitableInputsContainer">
              <label htmlFor="product-name">
                Product Name
                <input type="text" name="name" onChange={handleChange} id="name" placeholder="e.g. 'Digital Awesome Game'" />
              </label>
              <label htmlFor="description">
                Description
                <textarea type="textarea" onChange={handleChange} name="description" id="description" placeholder="e.g. 'After purchasing the product...'" />
              </label>
              <div className="changeableInputs">
                <label htmlFor="price">
                  Item Price in $
                  <input type="number" onChange={handleChange} name="price" id="price" placeholder="e.g. '$20'" />
                </label>
                <label htmlFor="size">
                  Size
                  <input type="number" onChange={handleChange} name="size" id="size" placeholder="e.g. 'Size'" />
                </label>
                <label htmlFor="property">
                  Property
                  <input type="text" onChange={handleChange} name="property" id="property" placeholder="e.g. 'Property'" />
                </label>
                <label htmlFor="royalty">
                  Royalty
                  <input type="number" onChange={handleChange} name="royalty" id="royalty" placeholder="e.g. '20%'" />
                </label>
                <label htmlFor="category">
                  Category
                  <select name="category" onChange={handleChange} id="category">
                    <option value="all-categories">All Categories</option>
                    <option value="art">Art</option>
                    <option value="music">Music</option>
                    <option value="video">Video</option>
                    <option value="collectionable">Collectionable</option>
                  </select>
                </label>
                <label htmlFor="collection">
                  Collection
                  <select name="collection" onChange={handleChange} id="collection">
                    <option value="all-collections">All Collections</option>
                    <option value="art-decco">Art Decco</option>
                    <option value="bored-ape-yacht-club">BoredApeYachtClub</option>
                    <option value="mutant-ape-yacht-club">MutantApeYachtClub</option>
                    <option value="art-blocks-factory">Art Blocks Factory</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="checkboxContainer">
              <label htmlFor="put-on-sale">
                <input className="checkbox" type="checkbox" id="put-on-sale" />
                Put on sale
              </label>
              <label htmlFor="instant-sale-price">
                <input className="checkbox" type="checkbox" id="instant-sale-price" />
                Instant Sale Price
              </label>
              <label htmlFor="unlock-purchased">
                <input className="checkbox" type="checkbox" id="unlock-purchased" />
                Unlock Purchased
              </label>
            </div>
            <div className="buttonsContainer">
              <button type="button" className="previewButton">Preview</button>
              <button type="submit" className="submitButton">Submit Item</button>
            </div>
          </form>
        </div>
        <section className="noteSection">
          <p>Note:</p>
          <p>Service fee: <strong>2.5%</strong></p>
          <p>You will receive: <strong>25.00 ETH $50,000</strong></p>
        </section>
      </div>
    </div>
  );
};

export default CreateNFTForm;
