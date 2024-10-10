/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import myImage from '../assets/bg1.jpg';

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  // Fetch data from your API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/get-top-scores');
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
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
        paddingTop: '10px', // Adds some space from the top
      }}
    >
      <div 
        data-testid="end-page-content-win" 
        className="flex justify-center my-20 text-5xl text-black font-bold"
      >
        - Top Scores -
      </div>
      {data.length > 0 ? (
        <table 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            padding: '20px', 
            borderRadius: '10px', 
            width: '66%',  // 2/3 of the screen width
            margin: '0 auto',  // Center the table horizontally
            borderCollapse: 'collapse', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>Name</th>
              <th style={{ padding: '10px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff' }}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{item.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{item.score}</td>
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
