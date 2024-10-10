/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlayButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CS455_GAME/play');
  };

  return<button onClick={handleClick} className='flex h-fit w-fit text-3xl bg-transparent px-4 py-4 border-2 border-white rounded-md text-white'>
    Enter Arena
  </button>
}

