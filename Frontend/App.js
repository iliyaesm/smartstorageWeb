import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StorageGrid from './components/StorageGrid';
import StorageModal from './components/StorageModal';

function App() {
  const [units, setUnits] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/storages')
      .then(res => setUnits(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SmartStorage</h1>
      <StorageGrid units={units} onSelect={setSelected} />
      {selected && (
        <StorageModal unit={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
