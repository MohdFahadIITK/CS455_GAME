/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TryAgainButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CS455_GAME/play');
  };


}

