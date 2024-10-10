// src/_tests_/InputButtons.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputButtons, randomNumberGenerator } from '../Components/InputButtons';
import { useNavigate } from 'react-router-dom';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock randomNumberGenerator function
jest.mock('../Components/InputButtons', () => ({
  ...jest.requireActual('../Components/InputButtons'),
  randomNumberGenerator: jest.fn(),
}));

describe('InputButtons Component', () => {
  let navigate;

  beforeEach(() => {
    jest.clearAllMocks();
    navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
  });

  test('renders buttons with correct values', () => {
    render(
      <InputButtons
        setCurrentScore={jest.fn()}
        setBalls={jest.fn()}
        setScore={jest.fn()}
        setBotResponse={jest.fn()}
      />
    );

    // Check that buttons with values are rendered
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });


});
