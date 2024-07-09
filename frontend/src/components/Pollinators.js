import React, { useState } from 'react';
import PollinatorData from './data/pollinators.json'; // Assume this contains your pollinator data

function Pollinators() {
  const [selectedPollinator, setSelectedPollinator] = useState(null);

  return (
    <div>
      <h2>Pollinators</h2>
      <ul>
        {PollinatorData.map(pollinator => (
          <li key={pollinator.id} onClick={() => setSelectedPollinator(pollinator)}>
            {pollinator.name}
          </li>
        ))}
      </ul>
      {selectedPollinator && (
        <div>
          <h3>{selectedPollinator.name}</h3>
          <p>{selectedPollinator.description}</p>
          <img src={selectedPollinator.image} alt={selectedPollinator.name} />
        </div>
      )}
    </div>
  );
}

export default Pollinators;
