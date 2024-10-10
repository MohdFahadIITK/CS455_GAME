// src/_tests_/ScoreDisplay.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreDisplay from '../Components/ScoreDisplay';

describe('ScoreDisplay Component', () => {
  test('renders the ScoreDisplay component correctly with given score and balls', () => {
    // Test case with score of 120 and 14 balls
    const score = 120;
    const balls = 14;
    
    render(<ScoreDisplay score={score} balls={balls} />);
    
    // Calculate overs and remaining balls
    const overs = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    
    // Check that the score and overs are rendered correctly
    expect(screen.getByText(score.toString())).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText(`${overs}.${remainingBalls}`)).toBeInTheDocument();
    expect(screen.getByText('Over')).toBeInTheDocument();
  });

  test('renders correctly with different score and balls', () => {
    // Test case with score of 50 and 8 balls
    const score = 50;
    const balls = 8;

    render(<ScoreDisplay score={score} balls={balls} />);
    
    // Calculate overs and remaining balls
    const overs = Math.floor(balls / 6);
    const remainingBalls = balls % 6;
    
    // Check that the score and overs are rendered correctly
    expect(screen.getByText(score.toString())).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText(`${overs}.${remainingBalls}`)).toBeInTheDocument();
    expect(screen.getByText('Over')).toBeInTheDocument();
  });
});
