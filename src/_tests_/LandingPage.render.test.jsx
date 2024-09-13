import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../Components/LandingPage';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';

// Mock child components
jest.mock('../Components/PlayButton', () => () => <div>Play Button Mock</div>);
jest.mock('../Components/WelcomeUser', () => () => <div>Welcome User Mock</div>);
jest.mock('../Components/Rules', () => () => <div>Rules Mock</div>);

// Mock the image import
jest.mock('../assets/pexels-jurie-maree-3665535-5519470.jpg', () => 'test-file-stub');

describe('LandingPage Component', () => {
  test('renders without crashing', () => {
    render(<LandingPage />);
    expect(screen.getByText('Welcome User Mock')).toBeInTheDocument();
  });

  test('renders WelcomeUser component', () => {
    render(<LandingPage />);
    expect(screen.getByText('Welcome User Mock')).toBeInTheDocument();
  });

  test('renders PlayButton component', () => {
    render(<LandingPage />);
    expect(screen.getByText('Play Button Mock')).toBeInTheDocument();
  });

  test('renders Rules component', () => {
    render(<LandingPage />);
    expect(screen.getByText('Rules Mock')).toBeInTheDocument();
  });
});
