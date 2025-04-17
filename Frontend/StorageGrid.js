import React from 'react';

export default function StorageGrid({ units, onSelect }) {
  return (
    <div className="grid grid-rows-3 grid-cols-10 gap-2">
      {units.map(u => {
        const bg = u.isRented ? 'bg-red-500' : 'bg-green-300';
        return (
          <button
            key={u.id}
            className={`${bg} p-4 rounded`}
            onClick={() => onSelect(u)}
          >
            {u.id}
          </button>
        );
      })}
    </div>
  );
}
