import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {['all', 'completed', 'pending'].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;