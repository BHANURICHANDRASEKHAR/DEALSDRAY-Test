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
    formData.append('file', image);  

    imageupload(formData, data, image, setdata, setloading);  // Fixed passing correct setloading
  };

  return (
    <div className='container-fluid'>
    <div className='row'>
      
      <div className='col-sm-6 mt-4  p-4'>
        <label className="form-label text-light" htmlFor="customFile">Upload Image (JPG/PNG)</label>
        <input
          type="file"
          className="form-control"
          id="customFile"
          onChange={handleImageChange}
          accept=".jpg, .jpeg, .png"  
        />
      </div>
  
    
      <div className='col-sm-6 mt-4  d-flex  justify-content-center align-items-center p-4'>
        <button 
          type="submit" 
          className='btn btn-outline-primary mb-4 mt-4 me-2' 
          onClick={handleSubmit}
          disabled={loading} 
        >
          <MdCloudUpload /> {loading ? "Uploading..." : "Upload"}
        </button>
  
        {/* Image Preview */}
        <div className='image-preview'>
          <ImageSlide 
            img={data.img.length === 0 
              ? 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg' 
              : data.img 
            } 
            className="img-fluid mb-5 " // Makes image responsive
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ImageUploadForm;
