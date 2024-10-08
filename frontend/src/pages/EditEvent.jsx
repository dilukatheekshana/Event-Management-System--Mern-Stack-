import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();
  
    useEffect(() => {
      setLoading(true);
      axios.get(`http://localhost:5555/events/${id}`)
      .then((response) => {
        setDescription(response.data.description);
        setDate(response.data.date);
        setTitle(response.data.title);
        setLocation(response.data.location);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error. Please check console');
        BsChevronDoubleLeft.log(error);
      });
    }, [])
  
    const handleEditEvent = () => {
     const data = { 
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .put(`http://localhost:5555/events/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Event Edited uccessfully', {variant:'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        //alert('An error happened. please check console');
        enqueueSnackbar('Error');
        console.log(error);
      });
    };
  
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Update Event</h1>
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
            <label className='text-xl mr-4 text-gray-500'>Date</label>
            <input
            type='text'
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
  
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditEvent}>
            Update
          </button>
  
        </div>
      </div>
    )
}

export default EditEvent