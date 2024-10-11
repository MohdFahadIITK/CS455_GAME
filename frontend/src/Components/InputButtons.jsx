/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function randomNumberGenerator() {
  const ans = Math.floor(Math.random() * 6);
  return ans <= 4 ? ans : ans + 1;
}

export const InputButtons = ({ score, setCurrentScore, setBalls, setScore, setBotResponse, token, userName }) => {
  const navigate = useNavigate();

  async function calculateScore(value) {
    setBalls(prevBalls => prevBalls + 1);
    const randomGeneratedValue = randomNumberGenerator();
    setBotResponse(randomGeneratedValue);
    
    if (value === randomGeneratedValue) {
      try {
        const response = await fetch('http://localhost:3000/api/save-current-score', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "user_auth_token": token, "score": score, "name" : userName }),
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        navigate('/CS455_GAME/GameOver');
      }, 1000);
    } else {
      setCurrentScore(value);
      setScore(score => score + value);
    }
  }

  function CustomButton({ value }) {
    return (
      <button
        className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md"
        onClick={() => calculateScore(value)}
      >
        {value}
      </button>
    );
  }

  function renderButtonColumns() {
    const buttonValues = [0, 3, 1, 4, 2, 6];
    const columns = [];

    for (let i = 0; i < 3; i++) {
      columns.push(
        <div key={i} className="flex flex-col items-center justify-center space-y-5 w-full">
          <CustomButton value={buttonValues[i * 2]} />
          <CustomButton value={buttonValues[i * 2 + 1]} />
        </div>
      );
    }

    return columns;
  }

  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-full">
      <h2 className="text-2xl mb-4">Choose your option</h2>
      <div className="flex justify-center space-x-4 items-center pr-4 py-4 h-1/2 w-full">
        {renderButtonColumns()}
      </div>
    </div>
  );
};
