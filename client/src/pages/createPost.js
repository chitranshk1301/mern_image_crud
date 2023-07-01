import React from 'react'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:3000';

const CreatePost = () => {
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', title);
    formData.append('description', description);

  await fetch(`${url}/api/post`, {
      method: 'POST',
      body: formData,
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
    .then(res => res.json() && navigate('/home'))
    .catch(err => console.log(err))
  }

  return (
    <div className='flex items-center justify-center'>
      <form className='flex flex-col gap-5 md:h-2/6 md:w-1/4 items-center justify-center mt-24 py-10 border' onSubmit={handleSubmit}>
        <div className="extraOutline p-4 bg-white min-w-[320px] bg-whtie m-auto rounded-lg">
          <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
            <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input className="text-sm cursor-pointer w-36 hidden" type="file" accept="image/*" onChange={handleFileChange} />
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button variant="contained" type='submit' size='large' onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  )
}
export default CreatePost