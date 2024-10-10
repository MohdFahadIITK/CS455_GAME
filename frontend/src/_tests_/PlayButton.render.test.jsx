// src/_tests_/PlayButton.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import PlayButton from '../Components/PlayButton';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('PlayButton Component', () => {

  test('navigates to /CS455_GAME/play when button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    
    render(<PlayButton />);
    
    const button = screen.getByText('Enter Arena');
    fireEvent.click(button);
    
    // Check that navigate function is called with the correct argument
    expect(navigate).toHaveBeenCalledWith('/CS455_GAME/play');
  });
});
