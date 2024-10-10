import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentScoreAndBotResponse from '../Components/CurrentScoreAndBotResponse';

describe('CurrentScoreAndBotResponse - Rendering with Various Scores and Responses', () => {
    const scores = [0, 1, 2, 3, 4, 6]; // Possible values for currentScore
    const responses = [0, 1, 2, 3, 4, 6]; // Possible values for botResponse

    scores.forEach((score) => {
        responses.forEach((response) => {
            test(`renders currentScore ${score} and botResponse ${response} correctly`, () => {
                render(<CurrentScoreAndBotResponse currentScore={score} botResponse={response} />);
                
                // Check if current score and bot response are rendered correctly
                const currentScoreElement = screen.getByTestId('current-score');
                const botResponseElement = screen.getByTestId('bot-response');

                expect(currentScoreElement).toBeInTheDocument();
                expect(currentScoreElement).toHaveTextContent(String(score));

                expect(botResponseElement).toBeInTheDocument();
                expect(botResponseElement).toHaveTextContent(String(response));
                
                // Check if labels are rendered correctly
                const currentScoreLabel = screen.getByTestId('current-score-label');
                const botResponseLabel = screen.getByTestId('bot-response-label');
                
                expect(currentScoreLabel).toBeInTheDocument();
                expect(currentScoreLabel).toHaveTextContent('Current Score');
                
                expect(botResponseLabel).toBeInTheDocument();
                expect(botResponseLabel).toHaveTextContent('Computer Response');
            });
        });
    });
});
