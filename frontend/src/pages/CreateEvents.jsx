import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateEvents = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
  
    const handleSaveEvent = () => {
     const data = { 
      title,
      description,
      date,
      location,
    };
    setLoading(true)
    axios
      .post('http://localhost:5555/events', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Event Created Successfully', { variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error happened. please check console');
        enqueueSnackbar('Error', {variant: 'error'});
        console.log(error);
      });
    };
  
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Add Event</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex  flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
  
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Description</label>
            <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Location</label>
            <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
  
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Date</label>
            <input
            type='text'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>
  
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveEvent}>
            Save
          </button>
  
        </div>
      </div>
    )
}

export default CreateEvents