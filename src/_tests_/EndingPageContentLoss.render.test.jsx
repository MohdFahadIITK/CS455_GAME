import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EndPageContentLoss from '../Components/EndPageContentLoss';

describe('EndPageContentLoss Component', () => {
    test('renders the correct text', () => {
        render(<EndPageContentLoss />);
        expect(screen.getByText(/Sad for the loss. Dont let you head down. To win you must keep trying./i)).toBeInTheDocument();
    });

    test('has the correct class names', () => {
        render(<EndPageContentLoss />);
        const element = screen.getByTestId('end-page-content-loss');
        expect(element).toHaveClass('flex');
        expect(element).toHaveClass('justify-center');
        expect(element).toHaveClass('my-20');
        expect(element).toHaveClass('text-3xl');
        expect(element).toHaveClass('text-fuchsia-500');
        expect(element).toHaveClass('font-semibold');
    });

    test('has the correct data-testid attribute', () => {
        render(<EndPageContentLoss />);
        const element = screen.getByTestId('end-page-content-loss');
        expect(element).toBeInTheDocument();
    });
});
