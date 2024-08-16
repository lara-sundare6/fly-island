import React, { useState } from 'react';
import PollinatorData from './data/pollinators.json'; // Assume this contains your pollinator data
import './Pollinators.css'; // Import the CSS file

function Pollinators() {
  const [selectedPollinator, setSelectedPollinator] = useState(null);

  return (
    <div className="pollinators">
      <h2>Pollinators</h2>
      <ul className="pollinator-list">
        {PollinatorData.map(pollinator => (
          <li key={pollinator.id} onClick={() => setSelectedPollinator(pollinator)} className="pollinator-item">
            {pollinator.name}
          </li>
        ))}
      </ul>
      {selectedPollinator && (
        <div className="pollinator-details">
          <h3>{selectedPollinator.name}</h3>
          <p>{selectedPollinator.description}</p>
          <img src={selectedPollinator.image} alt={selectedPollinator.name} />
        </div>
      )}
    </div>
  );
}

export default Pollinators;