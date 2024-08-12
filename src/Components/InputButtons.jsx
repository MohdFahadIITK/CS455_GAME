import React from 'react';

export default function InputButtons() {
  return (
    <div className="flex flex-col items-center justify-center h-1/2 w-full">
      {/* Add the text here */}
      <h2 className="text-2xl mb-4">Choose your option</h2>

      <div className="flex justify-center space-x-4 items-center pr-4 py-4 h-1/2 w-full">
        <div className="flex flex-col items-center justify-center space-y-5 w-full">
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">0</button>
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">3</button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-full">
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">1</button>
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">4</button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-full">
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">2</button>
          <button className="flex items-center justify-center bg-white h-16 w-full text-3xl border-2 border-black border-solid rounded-md">6</button>
        </div>
      </div>
    </div>
  );
}
