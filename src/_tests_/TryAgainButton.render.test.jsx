// src/_tests_/TryAgainButton.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import TryAgainButton from '../Components/TryAgainButton';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('TryAgainButton Component', () => {
  test('renders the TryAgainButton component correctly', () => {
    render(<TryAgainButton />);
    
    // Check that the button is rendered with the correct text
    expect(screen.getByText(/Enter Arena Again/i)).toBeInTheDocument();
  });

  test('navigates to /CS455_GAME/play when button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    
    render(<TryAgainButton />);
    
    const button = screen.getByTestId('try-again-button');
    fireEvent.click(button);
    
    // Check that navigate function is called with the correct argument
    expect(navigate).toHaveBeenCalledWith('/CS455_GAME/play');
  });
});
