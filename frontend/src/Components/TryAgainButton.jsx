/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TryAgainButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CS455_GAME/play');
  };

  return (
    <button 
      data-testid="try-again-button" 
      onClick={handleClick} 
      className='flex h-fit w-fit text-3xl bg-red-500 px-4 py-4 rounded-md'>
      Enter Arena Again
    </button>
  );

}

