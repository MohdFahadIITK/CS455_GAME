// src/_tests_/GifComponent.render.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import GifComponent from '../Components/GifComponent';
import myGifZero from '../assets/Zero.gif';
import myGifOne from '../assets/One.gif';
import myGifTwo from '../assets/Two.gif';
import myGifThree from '../assets/Three.gif';
import myGifFour from '../assets/Four.gif';
import myGifSix from '../assets/Six.gif';
import myGifOut from '../assets/Out.gif';

describe('GifComponent', () => {
  const renderComponent = (score) => render(<GifComponent currentScore={score} />);

  test('renders default GIF for score other than 0, 1, 2, 3, 4, or 6', () => {
    renderComponent(5);
    const img = screen.getByAltText('Gif for score 5');
    expect(img).toHaveAttribute('src', myGifOut);
  });

  test('renders GIF for score 0', () => {
    renderComponent(0);
    const img = screen.getByAltText('Gif for score 0');
    expect(img).toHaveAttribute('src', myGifZero);
  });

  test('renders GIF for score 1', () => {
    renderComponent(1);
    const img = screen.getByAltText('Gif for score 1');
    expect(img).toHaveAttribute('src', myGifOne);
  });

  test('renders GIF for score 2', () => {
    renderComponent(2);
    const img = screen.getByAltText('Gif for score 2');
    expect(img).toHaveAttribute('src', myGifTwo);
  });

  test('renders GIF for score 3', () => {
    renderComponent(3);
    const img = screen.getByAltText('Gif for score 3');
    expect(img).toHaveAttribute('src', myGifThree);
  });

  test('renders GIF for score 4', () => {
    renderComponent(4);
    const img = screen.getByAltText('Gif for score 4');
    expect(img).toHaveAttribute('src', myGifFour);
  });

  test('renders GIF for score 6', () => {
    renderComponent(6);
    const img = screen.getByAltText('Gif for score 6');
    expect(img).toHaveAttribute('src', myGifSix);
  });
});
