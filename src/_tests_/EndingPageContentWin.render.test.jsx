import React from 'react';
import { render, screen } from '@testing-library/react';
import EndPageContentWin from '../Components/EndPageContentWin';

describe('EndPageContentWin Component', () => {
  test('renders without crashing', () => {
    render(<EndPageContentWin />);
  });

  test('displays correct text', () => {
    render(<EndPageContentWin />);
    const textElement = screen.getByTestId('end-page-content-win');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(
      'Feel the rush of winning the game. If you want to keep winning.'
    );
  });

  test('has correct class names', () => {
    render(<EndPageContentWin />);
    const textElement = screen.getByTestId('end-page-content-win');
    expect(textElement).toHaveClass('flex justify-center my-20 text-3xl text-fuchsia-500 font-semibold');
  });
});
