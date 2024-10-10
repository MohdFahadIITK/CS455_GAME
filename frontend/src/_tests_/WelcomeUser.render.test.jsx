// src/_tests_/WelcomeUser.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeUser from '../Components/WelcomeUser';

describe('WelcomeUser Component', () => {
  test('renders the WelcomeUser component correctly', () => {
    render(<WelcomeUser />);
    
    // Check that the component renders the correct text
    expect(screen.getByText(/Hello User, Welcome to Online Hand Cricket Game. Click on the play button to enter the Arena./i)).toBeInTheDocument();
  });
});
