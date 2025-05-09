import React, { useState } from 'react';

function energyselector({ energy, setEnergy }) {
  const levels = ['Low', 'Moderate', 'High'];

  return (
    <div>
      <h3 className="font-semibold mb-2">Energy Level:</h3>
      <div className="flex gap-2">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setEnergy(level.toLowerCase())}
            className={`px-4 py-2 rounded border 
              ${energy === level.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}

export default energyselector;
