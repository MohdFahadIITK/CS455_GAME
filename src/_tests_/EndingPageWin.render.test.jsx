// src/_tests_/EndingPageWin.render.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndingPageWin from '../Components/EndingPageWin';
import { MemoryRouter } from 'react-router-dom'; // Import if you need to wrap your component

describe('EndingPageWin Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <EndingPageWin />
      </MemoryRouter>
    );
    expect(screen.getByTestId('end-page-content-win')).toBeInTheDocument();
    expect(screen.getByTestId('try-again-button')).toBeInTheDocument();
  });

  test('applies correct background styles', () => {
    const { container } = render(
      <MemoryRouter>
        <EndingPageWin />
      </MemoryRouter>
    );

    const div = container.firstChild;
    expect(div).toHaveStyle('background-size: cover');
    expect(div).toHaveStyle('background-position: center');
    expect(div).toHaveStyle('background-repeat: no-repeat');
    expect(div).toHaveStyle('height: 100vh');
  });
});
