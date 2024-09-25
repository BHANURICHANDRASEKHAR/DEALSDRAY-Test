import React, { useState } from 'react';
import { errorfunction, successfunction } from '../../../toast';  // Make sure these are correctly imported
import { MdCloudUpload } from 'react-icons/md';
import { imageupload } from './add.js';
import ImageSlide from './Image.jsx';
const ImageUploadForm = ({ setdata, data }) => {
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
      setImage(selectedFile);
    } else {
      errorfunction("Please upload a file in JPG or PNG format.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      errorfunction("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', image);  // Ensure the field name is correct based on your backend

    imageupload(formData, data, image, setdata, setloading);  // Fixed passing correct setloading
  };

  return (
    <div className='container  '>
      <div className='row '>
        <div className='col-sm-6 mt-5 '>
          <label className="form-label" htmlFor="customFile">Upload Image (JPG/PNG)</label>
          <input
            type="file"
            className="form-control"
            id="customFile"
            onChange={handleImageChange}
            accept=".jpg, .jpeg, .png"  
          />
        </div>

        <div className='col-sm-6 mt-4  d-flex justify-content-center align-items-center'>
          <button 
            type="submit" 
            className='btn btn-outline-primary' 
            onClick={handleSubmit}
            disabled={loading}  // Disable button when loading
          >
            <MdCloudUpload /> {loading ? "Uploading..." : "Upload"}
          </button>
          <ImageSlide/>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
