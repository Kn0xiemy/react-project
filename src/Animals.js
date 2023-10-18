import React from 'react';

export const Animal = ({name, isMammal}) => {
  const animalStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    backgroundColor: isMammal ? '#ciffc1' : '#ffc1c1',
  };

  return (
    <div style={animalStyle}>
      <h3>{name}</h3>
      <p>{isMammal ? 'Mammal' : 'Not a Mammal'}</p>

    </div>
  );
};