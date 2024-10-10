/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import myImage from '../assets/bg1.jpg';

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  // Fetch data from your API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div data-testid = 'end-page-content-win' className="flex justify-center my-20 text-5xl text-black font-bold" >
        - Top Scores -
      </div>
      {data.length > 0 ? (
        <table style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
          <thead>
            <tr>
              {/* Assuming your data has 'name' and 'score' fields */}
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
