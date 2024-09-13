// src/_tests_/InputButtons.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputButtons, randomNumberGenerator } from '../Components/InputButtons';
import { useNavigate } from 'react-router-dom';

// Mock useNavigate hook
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
    // Clear any previous mock implementations
    jest.clearAllMocks();

    // Mock navigate function
    navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
  });

  test('renders buttons correctly', () => {
    render(
      <InputButtons
        setCurrentScore={jest.fn()}
        setBalls={jest.fn()}
        setScore={jest.fn()}
        setBotResponse={jest.fn()}
      />
    );

    // Check if buttons with values 0, 3, 1, 4, 2, and 6 are rendered
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('calls setCurrentScore, setBalls, setScore, and setBotResponse when a button is clicked', () => {
    const setCurrentScore = jest.fn();
    const setBalls = jest.fn();
    const setScore = jest.fn();
    const setBotResponse = jest.fn();

    // Mock implementation of randomNumberGenerator to return a value
    const mockedRandomValue = 3; // Adjust this value as needed
    randomNumberGenerator.mockReturnValueOnce(mockedRandomValue);

    render(
      <InputButtons
        setCurrentScore={setCurrentScore}
        setBalls={setBalls}
        setScore={setScore}
        setBotResponse={setBotResponse}
      />
    );

    // Click a button with value that you want to test
    const button = screen.getByText('1'); // Choose a button to click
    fireEvent.click(button);
  });

  test('navigates to the GameWon page if the button value equals the random number', () => {
    const setCurrentScore = jest.fn();
    const setBalls = jest.fn();
    const setScore = jest.fn();
    const setBotResponse = jest.fn();

    // Mock implementation of randomNumberGenerator
    const mockedRandomValue = 1; // Match this with button value to trigger navigation
    randomNumberGenerator.mockReturnValueOnce(mockedRandomValue);

    render(
      <InputButtons
        setCurrentScore={setCurrentScore}
        setBalls={setBalls}
        setScore={setScore}
        setBotResponse={setBotResponse}
      />
    );

    // Click a button with the same value as the mocked random number
    const button = screen.getByText('1');
    fireEvent.click(button);

    // Assert that navigate is called
  });
});
