import React from 'react'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../redux/actions';

const CreatePost = (error, addImage) => {
  const [fileName, setFileName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(event.target.files[0]);
    setFileName(file ? file.name : '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedImage) {
      addImage(selectedImage);
    } 
  }

  return (
    <div className='flex items-center justify-center'>
      <form className='flex flex-col gap-5 md:h-2/6 md:w-1/4 items-center justify-center mt-24 py-10 border'>
        <div className="extraOutline p-4 bg-white min-w-[320px] bg-whtie m-auto rounded-lg">
          <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input className="text-sm cursor-pointer w-36 hidden" type="file" accept="image/*" onChange={handleFileChange} multiple />
                <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
              </label>
              
              <div className='border p-1 min-h-[20px] min-w-[200px] max-w-[220px] bg-gray-200 mt-2'>
                {fileName && <p className='font-bold'>Selected file: {fileName}</p>}
              </div>
            </div>
          </div>
        </div>

        <TextField
          label="Title"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Description"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        />

        <Button variant="contained" size='large' onClick={handleSubmit}>Submit</Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  imageUrl: state.image.imageUrl,
  error: state.image.error,
});

const mapDispatchToProps = {
  addImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)