import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlayButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CS455/play');
  };

  return<button onClick={handleClick} className='flex h-fit w-fit text-3xl bg-red-500 px-4 py-4 rounded-md'>
        Enter Arena
  </button>
}

