import React, { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';

const ImageUploadForm = ({ contributedata, setcontributedata, setloading }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    
    // Check if file type is either jpg or png
    if (selectedFile && (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')) {
      setImage(selectedFile);
    } else {
      alert("Please upload a file in JPG or PNG format.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    console.log(formData);
    // imageupload(formData, contributedata, setcontributedata, setloading, image)
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className='row'>
        <label className="form-label" htmlFor="customFile">Upload Image (JPG/PNG)</label>
        <input
          type="file"
          className="form-control"
          id="customFile"
          onChange={handleImageChange}
          accept=".jpg, .jpeg, .png"  
        />
      </div>
    
    </form>
  );
};

export default ImageUploadForm;
