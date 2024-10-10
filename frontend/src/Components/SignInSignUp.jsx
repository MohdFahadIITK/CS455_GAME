import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleButtonSignin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email, "password": password }),
      });

      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        console.log("Sign in successful", data);
        setToken(data.token);
        navigate('/CS455_GAME/Play');
      } else {
        alert(data.error || 'Failed to sign in, please try again.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  const handleButtonSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username": name, "email": email, "password": password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Sign up successful", data);
        setToken(data.token);
        console.log(token);
        navigate('/CS455_GAME/Play');
      } else {
        alert(data.error || 'Failed to sign up, please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-transparent">
      <div className="flex flex-col space-y-4">
        <div className='text-white'>Name:</div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          className="border rounded px-3 py-2"
        />
        <div className='text-white'>Email:</div>
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          className="border rounded px-3 py-2"
        />
        <div className='text-white'>Password:</div>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="border rounded px-3 py-2"
        />
        <div className="flex space-x-4">
          <button 
            onClick={handleButtonSignin} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in and Play
          </button>
          <button 
            onClick={handleButtonSignup} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign up and Play
          </button>
        </div>
      </div>
    </div>
  );
}
