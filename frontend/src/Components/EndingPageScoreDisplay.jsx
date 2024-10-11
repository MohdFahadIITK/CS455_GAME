/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function EndingPageScoreDisplay(){

    const[score,setScore] = useState(0);

    const { token } = useAuth();

    console.log(token);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://stormy-gorge-37627-4a036e4b8415.herokuapp.com/api/get-current-score', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "user_auth_token": token }),
              });
              const nowScore = await response.json();
              console.log("Score fetched value is "+ nowScore.score);
              setScore(nowScore.score);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [token]);
    return <div className = "flex h-fit w-fit text-3xl bg-yellow-300 px-4 py-4 rounded-md text-black-900">
        <div className='flex mr-2'>Your current score is :</div>
        <div className='flex items-center justify-center'>{score}</div>
    </div>
}