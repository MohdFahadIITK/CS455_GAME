import React from 'react'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import EndingPageLoss from '../Components/EndingPageLoss'; 

describe('EndingPageLoss Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <EndingPageLoss />
      </MemoryRouter>
    );

    expect(screen.getByTestId('end-page-content-loss')).toBeInTheDocument();
    expect(screen.getByTestId('try-again-button')).toBeInTheDocument();
  });

  test('applies correct background styles (excluding image-related styles)', () => {
    const { container } = render(
      <MemoryRouter>
        <EndingPageLoss />
      </MemoryRouter>
    );
    const div = container.firstChild;

    expect(div).toHaveStyle('background-size: cover');
  });
});
