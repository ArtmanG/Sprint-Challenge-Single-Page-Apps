import React from 'react';

function LocationsCard({ name, type, dimension, residents }) {
  return (
    <span>
      <div>
        <h2>{name}</h2>
        <p>Status: {type}</p>
        <p>Species: {dimension}</p>
        <p>Gender: {residents}</p>
      </div>
    </span>
  );
}

export default LocationsCard;
